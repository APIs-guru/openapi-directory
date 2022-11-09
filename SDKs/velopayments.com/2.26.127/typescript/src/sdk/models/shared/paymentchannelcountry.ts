import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentChannelRule } from "./paymentchannelrule";


export class PaymentChannelCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=isoCountryCode" })
  isoCountryCode: string;

  @Metadata({ data: "json, name=rules", elemType: shared.PaymentChannelRule })
  rules: PaymentChannelRule[];
}
