import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The OriginatingCallPrice record
**/
export declare class PricingV2TrunkingNumberOriginatingCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2TrunkingNumberTerminatingPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
export declare class PricingV2TrunkingNumber extends SpeakeasyBase {
    country?: string;
    destinationNumber?: string;
    isoCountry?: string;
    originatingCallPrice?: PricingV2TrunkingNumberOriginatingCallPrice;
    originationNumber?: string;
    priceUnit?: string;
    terminatingPrefixPrices?: PricingV2TrunkingNumberTerminatingPrefixPrices[];
    url?: string;
}
