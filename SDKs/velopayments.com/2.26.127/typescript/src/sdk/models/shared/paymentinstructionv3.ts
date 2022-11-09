import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransmissionTypeEnum } from "./transmissiontypeenum";


// PaymentInstructionV3
/** 
 * Instruction for creating a payment
**/
export class PaymentInstructionV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;

  @Metadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;

  @Metadata({ data: "json, name=transmissionType" })
  transmissionType?: TransmissionTypeEnum;
}
