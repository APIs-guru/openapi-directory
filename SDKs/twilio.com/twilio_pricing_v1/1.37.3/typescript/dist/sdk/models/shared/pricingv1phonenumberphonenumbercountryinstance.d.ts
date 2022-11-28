import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1PhoneNumberPhoneNumberCountryInstance extends SpeakeasyBase {
    country?: string;
    isoCountry?: string;
    phoneNumberPrices?: PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[];
    priceUnit?: string;
    url?: string;
}
