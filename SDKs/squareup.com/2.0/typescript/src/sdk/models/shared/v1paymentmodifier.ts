import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V1Money } from "./v1money";


// V1PaymentModifier
/** 
 * V1PaymentModifier
**/
export class V1PaymentModifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: V1Money;

  @Metadata({ data: "json, name=modifier_option_id" })
  modifierOptionId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
