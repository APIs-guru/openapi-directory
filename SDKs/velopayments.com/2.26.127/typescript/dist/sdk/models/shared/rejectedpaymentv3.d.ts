import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectedPaymentV3 extends SpeakeasyBase {
    amount: number;
    currencyType: string;
    lineNumber?: number;
    message?: string;
    paymentMetadata?: string;
    payorPaymentId: string;
    reason: string;
    reasonCode?: string;
    remoteId: string;
    remoteSystemId?: string;
    sourceAccountName: string;
}
