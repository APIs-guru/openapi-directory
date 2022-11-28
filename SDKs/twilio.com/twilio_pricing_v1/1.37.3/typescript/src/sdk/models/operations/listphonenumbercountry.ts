import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListPhoneNumberCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class ListPhoneNumberCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListPhoneNumberCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPhoneNumberCountryListPhoneNumberCountryResponseMeta extends SpeakeasyBase {
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


export class ListPhoneNumberCountryListPhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: shared.PricingV1PhoneNumberPhoneNumberCountry })
  countries?: shared.PricingV1PhoneNumberPhoneNumberCountry[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListPhoneNumberCountryListPhoneNumberCountryResponseMeta;
}


export class ListPhoneNumberCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListPhoneNumberCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListPhoneNumberCountrySecurity;
}


export class ListPhoneNumberCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPhoneNumberCountryResponse?: ListPhoneNumberCountryListPhoneNumberCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
