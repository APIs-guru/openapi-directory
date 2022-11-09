import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// PricingV2VoiceVoiceNumberInboundCallPrice
/** 
 * The InboundCallPrice record
**/
export class PricingV2VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2VoiceVoiceNumberOutboundCallPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2VoiceVoiceNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=destination_number" })
  destinationNumber?: string;

  @Metadata({ data: "json, name=inbound_call_price" })
  inboundCallPrice?: PricingV2VoiceVoiceNumberInboundCallPrice;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=origination_number" })
  originationNumber?: string;

  @Metadata({ data: "json, name=outbound_call_prices", elemType: shared.PricingV2VoiceVoiceNumberOutboundCallPrices })
  outboundCallPrices?: PricingV2VoiceVoiceNumberOutboundCallPrices[];

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
