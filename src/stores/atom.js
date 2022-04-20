import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: [],
});
export default productState;

export const filterState = atom({
  key: "filterState",
  default: [],
});
