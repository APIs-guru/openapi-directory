import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAvailablePhoneNumberCountryServerList = [
	"https://api.twilio.com",
] as const;


export class ListAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListAvailablePhoneNumberCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountry })
  countries?: shared.ApiV2010AccountAvailablePhoneNumberCountry[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListAvailablePhoneNumberCountryPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAvailablePhoneNumberCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListAvailablePhoneNumberCountrySecurity;
}


export class ListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAvailablePhoneNumberCountryResponse?: ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
