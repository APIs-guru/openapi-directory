import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransmissionTypeEnum } from "./transmissiontypeenum";



// PaymentInstructionV3
/** 
 * Instruction for creating a payment
**/
export class PaymentInstructionV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;

  @SpeakeasyMetadata({ data: "json, name=transmissionType" })
  transmissionType?: TransmissionTypeEnum;
}
