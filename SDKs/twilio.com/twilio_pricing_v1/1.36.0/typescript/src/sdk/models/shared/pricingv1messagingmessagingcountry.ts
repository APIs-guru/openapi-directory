import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PricingV1MessagingMessagingCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
