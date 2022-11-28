import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeAddress2 } from "./createpayeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { CreateIndividual2 } from "./createindividual2";
import { CreatePaymentChannel2 } from "./createpaymentchannel2";
import { PayeePayorRef } from "./payeepayorref";
import { PayeeTypeEnum } from "./payeetypeenum";



export class FailedPayee2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: CreatePayeeAddress2;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge2;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company2;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: CreateIndividual2;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentChannel" })
  paymentChannel?: CreatePaymentChannel2;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRef })
  payorRefs?: PayeePayorRef[];

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PayeeTypeEnum;
}
