import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";


// StartBalance
/** 
 * The starting balance of the statement
**/
export class StartBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;
}
