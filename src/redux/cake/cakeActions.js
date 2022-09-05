import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (num) => {
  return {
    type: BUY_CAKE,
    payload:num
  }
}
