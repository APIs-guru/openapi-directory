import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PricingV1VoiceVoiceNumberInboundCallPrice
/** 
 * The InboundCallPrice record
**/
export class PricingV1VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


// PricingV1VoiceVoiceNumberOutboundCallPrice
/** 
 * The OutboundCallPrice record
**/
export class PricingV1VoiceVoiceNumberOutboundCallPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;
}


export class PricingV1VoiceVoiceNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=inbound_call_price" })
  inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=outbound_call_price" })
  outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
