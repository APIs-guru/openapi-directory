import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchPhoneNumberCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchPhoneNumberCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchPhoneNumberCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPhoneNumberCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchPhoneNumberCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchPhoneNumberCountrySecurity;
}


export class FetchPhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV1PhoneNumberPhoneNumberCountryInstance?: shared.PricingV1PhoneNumberPhoneNumberCountryInstance;
}
