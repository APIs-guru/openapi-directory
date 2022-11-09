import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTAVAILABLEPHONENUMBERCOUNTRY_SERVERS = [
	"https://api.twilio.com",
];



export class ListAvailablePhoneNumberCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListAvailablePhoneNumberCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAvailablePhoneNumberCountryPathParams;

  @Metadata()
  queryParams: ListAvailablePhoneNumberCountryQueryParams;

  @Metadata()
  security: ListAvailablePhoneNumberCountrySecurity;
}


export class ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountry })
  countries?: shared.ApiV2010AccountAvailablePhoneNumberCountry[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAvailablePhoneNumberCountryResponse?: ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse;

  @Metadata()
  statusCode: number;
}
