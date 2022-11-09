import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V1Money } from "./v1money";


// V1PaymentDiscount
/** 
 * V1PaymentDiscount
**/
export class V1PaymentDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: V1Money;

  @Metadata({ data: "json, name=discount_id" })
  discountId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
