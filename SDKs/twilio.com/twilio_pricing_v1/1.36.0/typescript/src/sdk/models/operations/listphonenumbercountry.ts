import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPHONENUMBERCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class ListPhoneNumberCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListPhoneNumberCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPhoneNumberCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListPhoneNumberCountryQueryParams;

  @Metadata()
  security: ListPhoneNumberCountrySecurity;
}


export class ListPhoneNumberCountryListPhoneNumberCountryResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListPhoneNumberCountryListPhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.PricingV1PhoneNumberPhoneNumberCountry })
  countries?: shared.PricingV1PhoneNumberPhoneNumberCountry[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListPhoneNumberCountryListPhoneNumberCountryResponseMeta;
}


export class ListPhoneNumberCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPhoneNumberCountryResponse?: ListPhoneNumberCountryListPhoneNumberCountryResponse;

  @Metadata()
  statusCode: number;
}
