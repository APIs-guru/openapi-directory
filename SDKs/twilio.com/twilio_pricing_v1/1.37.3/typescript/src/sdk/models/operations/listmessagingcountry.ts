import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMessagingCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class ListMessagingCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessagingCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessagingCountryListMessagingCountryResponseMeta extends SpeakeasyBase {
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


export class ListMessagingCountryListMessagingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV1MessagingMessagingCountry })
  countries?: shared.PricingV1MessagingMessagingCountry[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMessagingCountryListMessagingCountryResponseMeta;
}


export class ListMessagingCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListMessagingCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListMessagingCountrySecurity;
}


export class ListMessagingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMessagingCountryResponse?: ListMessagingCountryListMessagingCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
