import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVOICECOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class ListVoiceCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVoiceCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVoiceCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListVoiceCountryQueryParams;

  @Metadata()
  security: ListVoiceCountrySecurity;
}


export class ListVoiceCountryListVoiceCountryResponseMeta extends SpeakeasyBase {
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


export class ListVoiceCountryListVoiceCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.PricingV2VoiceVoiceCountry })
  countries?: shared.PricingV2VoiceVoiceCountry[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListVoiceCountryListVoiceCountryResponseMeta;
}


export class ListVoiceCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVoiceCountryResponse?: ListVoiceCountryListVoiceCountryResponse;

  @Metadata()
  statusCode: number;
}
