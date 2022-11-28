import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV2VoiceVoiceCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
