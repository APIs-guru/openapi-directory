import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewTrustedCommsBrandedChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_sid" })
  brandSid?: string;

  @SpeakeasyMetadata({ data: "json, name=business_sid" })
  businessSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
