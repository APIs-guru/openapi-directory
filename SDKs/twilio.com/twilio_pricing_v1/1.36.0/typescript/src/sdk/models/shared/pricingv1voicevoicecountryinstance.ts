import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PricingV1VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=prefixes" })
  prefixes?: string[];
}


export class PricingV1VoiceVoiceCountryInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=inbound_call_prices", elemType: shared.PricingV1VoiceVoiceCountryInstanceInboundCallPrices })
  inboundCallPrices?: PricingV1VoiceVoiceCountryInstanceInboundCallPrices[];

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=outbound_prefix_prices", elemType: shared.PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices })
  outboundPrefixPrices?: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[];

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
