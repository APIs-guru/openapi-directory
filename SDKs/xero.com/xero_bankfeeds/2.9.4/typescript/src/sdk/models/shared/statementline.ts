import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";



// StatementLine
/** 
 * the lines details for a statement
**/
export class StatementLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=chequeNumber" })
  chequeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeName" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=postedDate" })
  postedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
