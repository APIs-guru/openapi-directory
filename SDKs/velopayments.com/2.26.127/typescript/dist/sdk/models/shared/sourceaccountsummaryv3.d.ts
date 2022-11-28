import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
export declare class SourceAccountSummaryV3 extends SpeakeasyBase {
    currency?: PaymentAuditCurrencyV3Enum;
    sourceAccountId: string;
    totalCost: number;
}
