import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDialingPermissionsCountryServerList = [
	"https://voice.twilio.com",
] as const;


export class ListDialingPermissionsCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Continent" })
  continent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HighRiskSpecialNumbersEnabled" })
  highRiskSpecialNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HighRiskTollfraudNumbersEnabled" })
  highRiskTollfraudNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCode" })
  isoCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LowRiskNumbersEnabled" })
  lowRiskNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDialingPermissionsCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta extends SpeakeasyBase {
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


export class ListDialingPermissionsCountryListDialingPermissionsCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountry })
  content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountry[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}


export class ListDialingPermissionsCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListDialingPermissionsCountryQueryParams;

  @SpeakeasyMetadata()
  security: ListDialingPermissionsCountrySecurity;
}


export class ListDialingPermissionsCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDialingPermissionsCountryResponse?: ListDialingPermissionsCountryListDialingPermissionsCountryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
