import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentChannelCountry } from "./paymentchannelcountry";


export class PaymentChannelRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank", elemType: shared.PaymentChannelCountry })
  bank?: PaymentChannelCountry[];
}
