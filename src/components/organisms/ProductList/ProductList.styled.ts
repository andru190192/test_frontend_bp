import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: block;
    thead {
      display: none;
    }
    tbody {
      display: block;
      width: 100%;
    }
    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    td {
      text-align: center;
      padding: 8px;
      border: 1px solid #ccc;
      &:before {
        content: attr(data-label);
        flex-basis: 50%;
        text-align: left;
        font-weight: bold;
      }
    }
  }
`;

export const Column = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;

  img {
    width: 50px;
    height: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;