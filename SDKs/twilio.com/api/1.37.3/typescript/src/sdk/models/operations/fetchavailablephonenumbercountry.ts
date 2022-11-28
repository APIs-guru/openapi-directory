import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchAvailablePhoneNumberCountryServerList = [
	"https://api.twilio.com",
] as const;


export class FetchAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" })
  countryCode: string;
}


export class FetchAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchAvailablePhoneNumberCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchAvailablePhoneNumberCountrySecurity;
}


export class FetchAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountAvailablePhoneNumberCountry?: shared.ApiV2010AccountAvailablePhoneNumberCountry;
}
