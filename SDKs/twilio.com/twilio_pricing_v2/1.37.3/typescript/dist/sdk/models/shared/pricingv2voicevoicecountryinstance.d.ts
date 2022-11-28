import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV2VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
export declare class PricingV2VoiceVoiceCountryInstance extends SpeakeasyBase {
    country?: string;
    inboundCallPrices?: PricingV2VoiceVoiceCountryInstanceInboundCallPrices[];
    isoCountry?: string;
    outboundPrefixPrices?: PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[];
    priceUnit?: string;
    url?: string;
}
