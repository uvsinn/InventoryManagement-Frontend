import { Product } from "../product";

export interface GetAllProducts {
  data: Product[]; 
  message: string;
  isSuccess: boolean;
}
