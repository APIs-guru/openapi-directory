import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentInstructionV3 } from "./paymentinstructionv3";



export class CreatePayoutRequestV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payments", elemType: PaymentInstructionV3 })
  payments: PaymentInstructionV3[];

  @SpeakeasyMetadata({ data: "json, name=payoutFromPayorId" })
  payoutFromPayorId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutToPayorId" })
  payoutToPayorId?: string;
}
