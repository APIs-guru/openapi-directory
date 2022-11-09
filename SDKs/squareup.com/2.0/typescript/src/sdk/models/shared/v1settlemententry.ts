import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";


// V1SettlementEntry
/** 
 * V1SettlementEntry
**/
export class V1SettlementEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: V1Money;

  @Metadata({ data: "json, name=fee_money" })
  feeMoney?: V1Money;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
