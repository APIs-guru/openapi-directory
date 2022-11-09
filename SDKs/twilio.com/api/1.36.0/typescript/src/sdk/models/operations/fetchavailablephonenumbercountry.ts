import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHAVAILABLEPHONENUMBERCOUNTRY_SERVERS = [
	"https://api.twilio.com",
];



export class FetchAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" })
  countryCode: string;
}


export class FetchAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchAvailablePhoneNumberCountryPathParams;

  @Metadata()
  security: FetchAvailablePhoneNumberCountrySecurity;
}


export class FetchAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountAvailablePhoneNumberCountry?: shared.ApiV2010AccountAvailablePhoneNumberCountry;
}
