import { Product } from "../product";

export interface UpdateProduct {
    data: Product; 
  message: string;
  isSuccess: boolean;
}