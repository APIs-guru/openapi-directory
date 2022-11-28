import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcceptedPaymentV3 extends SpeakeasyBase {
    amount: number;
    currencyType: string;
    paymentMemo?: string;
    paymentMetadata?: string;
    payorPaymentId: string;
    remoteId: string;
    remoteSystemId?: string;
    sourceAccountName: string;
}
