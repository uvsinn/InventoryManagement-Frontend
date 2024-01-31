import { Product } from "../product";

export interface GetProductById {
    data: Product; 
  message: string;
  isSuccess: boolean;
}