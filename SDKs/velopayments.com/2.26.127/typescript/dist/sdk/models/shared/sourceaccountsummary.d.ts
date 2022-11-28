import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
export declare class SourceAccountSummary extends SpeakeasyBase {
    currency?: PaymentAuditCurrencyEnum;
    sourceAccountId: string;
    totalCost: number;
}
