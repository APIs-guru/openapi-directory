import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PricingV2VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=destination_prefixes" })
  destinationPrefixes?: string[];

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2VoiceVoiceCountryInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=inbound_call_prices", elemType: shared.PricingV2VoiceVoiceCountryInstanceInboundCallPrices })
  inboundCallPrices?: PricingV2VoiceVoiceCountryInstanceInboundCallPrices[];

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=outbound_prefix_prices", elemType: shared.PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices })
  outboundPrefixPrices?: PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[];

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
