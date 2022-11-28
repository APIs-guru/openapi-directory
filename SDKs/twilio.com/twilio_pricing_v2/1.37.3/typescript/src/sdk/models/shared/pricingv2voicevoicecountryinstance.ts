import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV2VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=destination_prefixes" })
  destinationPrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2VoiceVoiceCountryInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_call_prices", elemType: PricingV2VoiceVoiceCountryInstanceInboundCallPrices })
  inboundCallPrices?: PricingV2VoiceVoiceCountryInstanceInboundCallPrices[];

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_prefix_prices", elemType: PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices })
  outboundPrefixPrices?: PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
