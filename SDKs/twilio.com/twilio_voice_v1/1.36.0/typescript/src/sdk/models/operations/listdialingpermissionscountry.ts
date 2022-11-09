import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDIALINGPERMISSIONSCOUNTRY_SERVERS = [
	"https://voice.twilio.com",
];



export class ListDialingPermissionsCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Continent" })
  continent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HighRiskSpecialNumbersEnabled" })
  highRiskSpecialNumbersEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HighRiskTollfraudNumbersEnabled" })
  highRiskTollfraudNumbersEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsoCode" })
  isoCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LowRiskNumbersEnabled" })
  lowRiskNumbersEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDialingPermissionsCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDialingPermissionsCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListDialingPermissionsCountryQueryParams;

  @Metadata()
  security: ListDialingPermissionsCountrySecurity;
}


export class ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta extends SpeakeasyBase {
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


export class ListDialingPermissionsCountryListDialingPermissionsCountryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountry })
  content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountry[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}


export class ListDialingPermissionsCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDialingPermissionsCountryResponse?: ListDialingPermissionsCountryListDialingPermissionsCountryResponse;

  @Metadata()
  statusCode: number;
}
