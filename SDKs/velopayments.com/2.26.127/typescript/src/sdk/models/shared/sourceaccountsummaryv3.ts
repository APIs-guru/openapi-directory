import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";



export class SourceAccountSummaryV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost: number;
}
