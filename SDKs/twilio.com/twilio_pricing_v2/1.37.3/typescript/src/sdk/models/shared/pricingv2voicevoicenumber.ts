import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PricingV2VoiceVoiceNumberInboundCallPrice
/** 
 * The InboundCallPrice record
**/
export class PricingV2VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2VoiceVoiceNumberOutboundCallPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2VoiceVoiceNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_number" })
  destinationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_call_price" })
  inboundCallPrice?: PricingV2VoiceVoiceNumberInboundCallPrice;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=origination_number" })
  originationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_call_prices", elemType: PricingV2VoiceVoiceNumberOutboundCallPrices })
  outboundCallPrices?: PricingV2VoiceVoiceNumberOutboundCallPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
