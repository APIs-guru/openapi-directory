import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";


// EndBalance
/** 
 * The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
**/
export class EndBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;
}
