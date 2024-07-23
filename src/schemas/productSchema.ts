import { z } from 'zod';
import productsApi from 'services/products/api';

const currentDate = new Date().toISOString().split('T')[0];

export const productSchema = z.object({
  id: z.string()
    .min(3, "Id must be at least 3 characters")
    .max(10, "Id must be at most 10 characters")
    .refine(async (id) => {
      if (id.length >= 3 && id.length <= 10) {
        const idExists = await productsApi.verificationId(id);
        return !idExists;
      }
      return true;
    }, { message: "ID no válido" }),
  name: z.string()
    .min(5, "Name must be at least 5 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be at most 200 characters"),
  logo: z.string()
    .min(1, "Logo URL is required"),
    date_release: z.date()
    .refine((date) => new Date(date) >= new Date(currentDate), { message: "Release date must be today or later" }),
  date_revision: z.date()
});

export const productFormSchema = productSchema.refine(data => {
  const { date_release, date_revision } = data;
  if (!date_release || !date_revision) {
    return false;
  }
  const expectedRevisionDate = new Date(date_release);
  expectedRevisionDate.setFullYear(expectedRevisionDate.getFullYear() + 1);
  return date_revision.getTime() === expectedRevisionDate.getTime();
}, {
  message: "Revision date must be exactly one year after release date",
  path: ["date_revision"]
});

export type ProductSchema = z.infer<typeof productSchema>;