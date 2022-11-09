import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1PhoneNumberPhoneNumberCountryInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=phone_number_prices", elemType: shared.PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices })
  phoneNumberPrices?: PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[];

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
