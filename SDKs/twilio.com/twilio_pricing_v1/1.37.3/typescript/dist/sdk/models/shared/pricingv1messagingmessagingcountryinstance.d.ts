import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1MessagingMessagingCountryInstanceInboundSmsPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices extends SpeakeasyBase {
    carrier?: string;
    mcc?: string;
    mnc?: string;
    prices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[];
}
export declare class PricingV1MessagingMessagingCountryInstance extends SpeakeasyBase {
    country?: string;
    inboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[];
    isoCountry?: string;
    outboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[];
    priceUnit?: string;
    url?: string;
}
