import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1PhoneNumberPhoneNumberCountryInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_prices", elemType: PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices })
  phoneNumberPrices?: PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
