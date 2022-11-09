import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePayeeAddress2 } from "./createpayeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { CreateIndividual2 } from "./createindividual2";
import { CreatePaymentChannel2 } from "./createpaymentchannel2";
import { PayeePayorRef } from "./payeepayorref";
import { PayeeTypeEnum } from "./payeetypeenum";


export class CreatePayee2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: CreatePayeeAddress2;

  @Metadata({ data: "json, name=challenge" })
  challenge?: Challenge2;

  @Metadata({ data: "json, name=company" })
  company?: Company2;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=individual" })
  individual?: CreateIndividual2;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @Metadata({ data: "json, name=paymentChannel" })
  paymentChannel?: CreatePaymentChannel2;

  @Metadata({ data: "json, name=payorRefs", elemType: shared.PayeePayorRef })
  payorRefs?: PayeePayorRef[];

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;

  @Metadata({ data: "json, name=type" })
  type: PayeeTypeEnum;
}
