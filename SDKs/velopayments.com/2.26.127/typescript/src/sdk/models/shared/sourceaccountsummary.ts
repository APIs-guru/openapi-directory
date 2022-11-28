import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";



export class SourceAccountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: PaymentAuditCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost: number;
}
