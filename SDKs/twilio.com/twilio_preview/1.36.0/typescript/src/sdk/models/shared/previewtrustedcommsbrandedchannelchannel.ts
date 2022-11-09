import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewTrustedCommsBrandedChannelChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=brand_sid" })
  brandSid?: string;

  @Metadata({ data: "json, name=branded_channel_sid" })
  brandedChannelSid?: string;

  @Metadata({ data: "json, name=business_sid" })
  businessSid?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phone_number_sid" })
  phoneNumberSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
