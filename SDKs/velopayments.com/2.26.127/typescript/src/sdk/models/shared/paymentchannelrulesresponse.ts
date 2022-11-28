import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentChannelCountry } from "./paymentchannelcountry";



export class PaymentChannelRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bank", elemType: PaymentChannelCountry })
  bank?: PaymentChannelCountry[];
}
