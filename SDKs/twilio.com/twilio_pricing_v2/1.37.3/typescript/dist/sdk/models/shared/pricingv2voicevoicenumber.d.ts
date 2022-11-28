import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The InboundCallPrice record
**/
export declare class PricingV2VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2VoiceVoiceNumberOutboundCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    originationPrefixes?: string[];
}
export declare class PricingV2VoiceVoiceNumber extends SpeakeasyBase {
    country?: string;
    destinationNumber?: string;
    inboundCallPrice?: PricingV2VoiceVoiceNumberInboundCallPrice;
    isoCountry?: string;
    originationNumber?: string;
    outboundCallPrices?: PricingV2VoiceVoiceNumberOutboundCallPrices[];
    priceUnit?: string;
    url?: string;
}
