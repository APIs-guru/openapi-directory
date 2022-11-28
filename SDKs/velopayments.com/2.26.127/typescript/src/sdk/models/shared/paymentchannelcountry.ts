import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentChannelRule } from "./paymentchannelrule";



export class PaymentChannelCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isoCountryCode" })
  isoCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: PaymentChannelRule })
  rules: PaymentChannelRule[];
}
