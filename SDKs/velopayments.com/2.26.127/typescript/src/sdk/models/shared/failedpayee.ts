import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeAddress } from "./createpayeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { CreateIndividual } from "./createindividual";
import { CreatePaymentChannel } from "./createpaymentchannel";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { PayeeTypeEnum } from "./payeetypeenum";



export class FailedPayee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: CreatePayeeAddress;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: CreateIndividual;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentChannel" })
  paymentChannel?: CreatePaymentChannel;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRefV3 })
  payorRefs?: PayeePayorRefV3[];

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PayeeTypeEnum;
}
