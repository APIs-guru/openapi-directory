import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";


export class SourceAccountSummaryV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: PaymentAuditCurrencyV3Enum;

  @Metadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @Metadata({ data: "json, name=totalCost" })
  totalCost: number;
}
