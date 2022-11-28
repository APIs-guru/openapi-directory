import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchPhoneNumberServerList = [
	"https://lookups.twilio.com",
] as const;


export class FetchPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PhoneNumber" })
  phoneNumber: string;
}


export class FetchPhoneNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Fields" })
  fields?: string;
}


export class FetchPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchPhoneNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchPhoneNumberQueryParams;

  @SpeakeasyMetadata()
  security: FetchPhoneNumberSecurity;
}


export class FetchPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lookupsV2PhoneNumber?: shared.LookupsV2PhoneNumber;
}
