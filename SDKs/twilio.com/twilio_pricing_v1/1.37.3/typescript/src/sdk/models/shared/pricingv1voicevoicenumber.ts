import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PricingV1VoiceVoiceNumberInboundCallPrice
/** 
 * The InboundCallPrice record
**/
export class PricingV1VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


// PricingV1VoiceVoiceNumberOutboundCallPrice
/** 
 * The OutboundCallPrice record
**/
export class PricingV1VoiceVoiceNumberOutboundCallPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;
}


export class PricingV1VoiceVoiceNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_call_price" })
  inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_call_price" })
  outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
