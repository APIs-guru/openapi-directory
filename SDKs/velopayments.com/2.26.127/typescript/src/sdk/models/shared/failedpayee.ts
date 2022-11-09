import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePayeeAddress } from "./createpayeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { CreateIndividual } from "./createindividual";
import { CreatePaymentChannel } from "./createpaymentchannel";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { PayeeTypeEnum } from "./payeetypeenum";


export class FailedPayee extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: CreatePayeeAddress;

  @Metadata({ data: "json, name=challenge" })
  challenge?: Challenge;

  @Metadata({ data: "json, name=company" })
  company?: Company;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=individual" })
  individual?: CreateIndividual;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @Metadata({ data: "json, name=paymentChannel" })
  paymentChannel?: CreatePaymentChannel;

  @Metadata({ data: "json, name=payorRefs", elemType: shared.PayeePayorRefV3 })
  payorRefs?: PayeePayorRefV3[];

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "json, name=type" })
  type?: PayeeTypeEnum;
}
