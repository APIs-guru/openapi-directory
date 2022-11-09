import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The InboundCallPrice record
**/
export declare class PricingV1VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
/**
 * The OutboundCallPrice record
**/
export declare class PricingV1VoiceVoiceNumberOutboundCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
}
export declare class PricingV1VoiceVoiceNumber extends SpeakeasyBase {
    country?: string;
    inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice;
    isoCountry?: string;
    number?: string;
    outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice;
    priceUnit?: string;
    url?: string;
}
