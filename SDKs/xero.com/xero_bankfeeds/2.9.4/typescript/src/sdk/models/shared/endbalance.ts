import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";



// EndBalance
/** 
 * The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
**/
export class EndBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;
}
