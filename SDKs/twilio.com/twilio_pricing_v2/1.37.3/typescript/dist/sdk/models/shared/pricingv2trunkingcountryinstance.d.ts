import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV2TrunkingCountryInstanceOriginatingCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
export declare class PricingV2TrunkingCountryInstance extends SpeakeasyBase {
    country?: string;
    isoCountry?: string;
    originatingCallPrices?: PricingV2TrunkingCountryInstanceOriginatingCallPrices[];
    priceUnit?: string;
    terminatingPrefixPrices?: PricingV2TrunkingCountryInstanceTerminatingPrefixPrices[];
    url?: string;
}
