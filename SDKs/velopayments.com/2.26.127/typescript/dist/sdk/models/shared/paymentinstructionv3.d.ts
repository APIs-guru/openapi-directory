import { SpeakeasyBase } from "../../../internal/utils";
import { TransmissionTypeEnum } from "./transmissiontypeenum";
/**
 * Instruction for creating a payment
**/
export declare class PaymentInstructionV3 extends SpeakeasyBase {
    amount: number;
    currency: string;
    paymentMemo?: string;
    paymentMetadata?: string;
    payorPaymentId?: string;
    remoteId: string;
    remoteSystemId?: string;
    sourceAccountName: string;
    transmissionType?: TransmissionTypeEnum;
}
