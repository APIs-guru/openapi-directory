import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTrunkingCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class ListTrunkingCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrunkingCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrunkingCountryListTrunkingCountryResponseMeta extends SpeakeasyBase {
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


export class ListTrunkingCountryListTrunkingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV2TrunkingCountry })
  countries?: shared.PricingV2TrunkingCountry[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTrunkingCountryListTrunkingCountryResponseMeta;
}


export class ListTrunkingCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListTrunkingCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListTrunkingCountrySecurity;
}


export class ListTrunkingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTrunkingCountryResponse?: ListTrunkingCountryListTrunkingCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
