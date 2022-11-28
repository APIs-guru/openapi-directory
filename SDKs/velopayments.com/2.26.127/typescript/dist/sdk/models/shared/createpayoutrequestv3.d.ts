import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInstructionV3 } from "./paymentinstructionv3";
export declare class CreatePayoutRequestV3 extends SpeakeasyBase {
    payments: PaymentInstructionV3[];
    payoutFromPayorId?: string;
    payoutMemo?: string;
    payoutToPayorId?: string;
}
