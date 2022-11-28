import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListVoiceCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class ListVoiceCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVoiceCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVoiceCountryListVoiceCountryResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListVoiceCountryListVoiceCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV2VoiceVoiceCountry })
  countries?: shared.PricingV2VoiceVoiceCountry[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListVoiceCountryListVoiceCountryResponseMeta;
}


export class ListVoiceCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListVoiceCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListVoiceCountrySecurity;
}


export class ListVoiceCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listVoiceCountryResponse?: ListVoiceCountryListVoiceCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
