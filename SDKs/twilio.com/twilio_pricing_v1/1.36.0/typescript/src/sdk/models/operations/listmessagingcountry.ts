import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMESSAGINGCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class ListMessagingCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessagingCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessagingCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListMessagingCountryQueryParams;

  @Metadata()
  security: ListMessagingCountrySecurity;
}


export class ListMessagingCountryListMessagingCountryResponseMeta extends SpeakeasyBase {
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


export class ListMessagingCountryListMessagingCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.PricingV1MessagingMessagingCountry })
  countries?: shared.PricingV1MessagingMessagingCountry[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMessagingCountryListMessagingCountryResponseMeta;
}


export class ListMessagingCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessagingCountryResponse?: ListMessagingCountryListMessagingCountryResponse;

  @Metadata()
  statusCode: number;
}
