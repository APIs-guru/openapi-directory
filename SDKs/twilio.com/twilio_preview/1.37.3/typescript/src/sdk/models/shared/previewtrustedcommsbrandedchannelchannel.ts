import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewTrustedCommsBrandedChannelChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_sid" })
  brandSid?: string;

  @SpeakeasyMetadata({ data: "json, name=branded_channel_sid" })
  brandedChannelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=business_sid" })
  businessSid?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_sid" })
  phoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
