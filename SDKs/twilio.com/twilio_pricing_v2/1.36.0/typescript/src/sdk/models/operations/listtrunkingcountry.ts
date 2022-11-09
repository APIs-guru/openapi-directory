import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRUNKINGCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class ListTrunkingCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrunkingCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrunkingCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListTrunkingCountryQueryParams;

  @Metadata()
  security: ListTrunkingCountrySecurity;
}


export class ListTrunkingCountryListTrunkingCountryResponseMeta extends SpeakeasyBase {
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


export class ListTrunkingCountryListTrunkingCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.PricingV2TrunkingCountry })
  countries?: shared.PricingV2TrunkingCountry[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListTrunkingCountryListTrunkingCountryResponseMeta;
}


export class ListTrunkingCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrunkingCountryResponse?: ListTrunkingCountryListTrunkingCountryResponse;

  @Metadata()
  statusCode: number;
}
