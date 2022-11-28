import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";



// StartBalance
/** 
 * The starting balance of the statement
**/
export class StartBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;
}
