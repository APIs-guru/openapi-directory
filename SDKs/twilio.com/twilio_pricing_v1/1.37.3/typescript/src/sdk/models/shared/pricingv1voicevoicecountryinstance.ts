import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV1VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=prefixes" })
  prefixes?: string[];
}


export class PricingV1VoiceVoiceCountryInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_call_prices", elemType: PricingV1VoiceVoiceCountryInstanceInboundCallPrices })
  inboundCallPrices?: PricingV1VoiceVoiceCountryInstanceInboundCallPrices[];

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_prefix_prices", elemType: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices })
  outboundPrefixPrices?: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
