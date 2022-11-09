import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHPHONENUMBERCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchPhoneNumberCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchPhoneNumberCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPhoneNumberCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchPhoneNumberCountryPathParams;

  @Metadata()
  security: FetchPhoneNumberCountrySecurity;
}


export class FetchPhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV1PhoneNumberPhoneNumberCountryInstance?: shared.PricingV1PhoneNumberPhoneNumberCountryInstance;
}
