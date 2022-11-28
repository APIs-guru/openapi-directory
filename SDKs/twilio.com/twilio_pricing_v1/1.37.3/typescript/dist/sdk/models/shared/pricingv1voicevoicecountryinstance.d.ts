import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    friendlyName?: string;
    prefixes?: string[];
}
export declare class PricingV1VoiceVoiceCountryInstance extends SpeakeasyBase {
    country?: string;
    inboundCallPrices?: PricingV1VoiceVoiceCountryInstanceInboundCallPrices[];
    isoCountry?: string;
    outboundPrefixPrices?: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[];
    priceUnit?: string;
    url?: string;
}
