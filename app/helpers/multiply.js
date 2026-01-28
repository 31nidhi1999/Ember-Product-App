import { helper } from "@ember/component/helper";

export default helper(function multiply(params) {
  return params[0] * params[1];
});