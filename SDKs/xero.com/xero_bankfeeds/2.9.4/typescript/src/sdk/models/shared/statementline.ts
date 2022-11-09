import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";


// StatementLine
/** 
 * the lines details for a statement
**/
export class StatementLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=chequeNumber" })
  chequeNumber?: string;

  @Metadata({ data: "json, name=creditDebitIndicator" })
  creditDebitIndicator?: CreditDebitIndicatorEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=payeeName" })
  payeeName?: string;

  @Metadata({ data: "json, name=postedDate" })
  postedDate?: Date;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
