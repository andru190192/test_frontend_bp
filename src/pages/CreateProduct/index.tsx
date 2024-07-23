import { useEffect, useRef } from "react";
import { addYears } from "date-fns";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "components/atoms/Button";
import { Content, ErrorMessage, Footer, Form, Header, HStack, Input, VStack } from "./styles";
import { productFormSchema, ProductSchema } from "schemas/productSchema";
import { useCreateProduct } from "services/products/mutations";

const CreateProduct: React.FC = () => {
  const defaultValues = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: undefined,
    date_revision: undefined,
  }
  const { 
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues
  });

  const dateRelease = watch('date_release');

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (dateRelease) {
      const releaseDate = new Date(dateRelease);
      const revisionDate = addYears(releaseDate, 1);
      setValue('date_revision', revisionDate, { shouldValidate: true });
    }
  }, [dateRelease, setValue]);

  const onSuccess = () => {
    if (formRef.current) {
      reset(defaultValues, { keepErrors: true });
      clearErrors();
      formRef.current.reset();
    }
  };

  const { mutate: createProduct } = useCreateProduct({
    onSuccess,
    onError: () => {},
  });

  const onSubmit = (data: ProductSchema) => {
    createProduct(data)
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <h1>Formulario de Registro</h1>
      </Header>
      <Content>
        <HStack>
          <VStack>
            <label htmlFor="id">ID</label>
            <Input id="id" {...register("id")} />
            {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
          </VStack>
          <VStack>
            <label htmlFor="name">Name</label>
            <Input id="name" {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </VStack>
        </HStack>
        
        <HStack>
          <VStack>
            <label htmlFor="description">Description</label>
            <Input id="description" {...register("description")} />
            {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
          </VStack>
          <VStack>
            <label htmlFor="logo">Logo URL</label>
            <Input id="logo" {...register("logo")} />
            {errors.logo && <ErrorMessage>{errors.logo.message}</ErrorMessage>}
          </VStack>
        </HStack>

        <HStack>
          <VStack>
            <label htmlFor="date_release">Release Date</label>
            <Input id="date_release" type="date" {...register("date_release", { valueAsDate: true })} />
            {errors.date_release && <ErrorMessage>{errors.date_release.message}</ErrorMessage>}
          </VStack>
          <VStack>
            <label htmlFor="date_revision">Revision Date</label>
            <Controller
              name="date_revision"
              control={control}
              render={({ field }) => (
                <Input
                  id="date_revision"
                  type="date"
                  value={field.value instanceof Date && !isNaN(field.value) ? field.value.toISOString().split('T')[0] : ''}
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                  disabled
                />
              )}
            />
            {errors.date_revision && <ErrorMessage>{errors.date_revision.message}</ErrorMessage>}
          </VStack>
        </HStack>
      </Content>
      <Footer>
        <Button type="reset" $variant="secondary" onClick={() => {
          reset(defaultValues, { keepErrors: true });
          clearErrors();
        }}>Reiniciar</Button>
        <Button type="submit" disabled={!isValid}>Enviar</Button>
      </Footer>
    </Form>
  );
};

export default CreateProduct;