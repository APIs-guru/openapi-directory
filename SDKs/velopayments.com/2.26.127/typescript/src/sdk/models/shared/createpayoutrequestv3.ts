import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentInstructionV3 } from "./paymentinstructionv3";


export class CreatePayoutRequestV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=payments", elemType: shared.PaymentInstructionV3 })
  payments: PaymentInstructionV3[];

  @Metadata({ data: "json, name=payoutFromPayorId" })
  payoutFromPayorId?: string;

  @Metadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "json, name=payoutToPayorId" })
  payoutToPayorId?: string;
}
