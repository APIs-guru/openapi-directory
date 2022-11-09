import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDIALINGPERMISSIONSHRSPREFIXES_SERVERS = [
	"https://voice.twilio.com",
];



export class ListDialingPermissionsHrsPrefixesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCode" })
  isoCode: string;
}


export class ListDialingPermissionsHrsPrefixesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDialingPermissionsHrsPrefixesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDialingPermissionsHrsPrefixesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDialingPermissionsHrsPrefixesPathParams;

  @Metadata()
  queryParams: ListDialingPermissionsHrsPrefixesQueryParams;

  @Metadata()
  security: ListDialingPermissionsHrsPrefixesSecurity;
}


export class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta extends SpeakeasyBase {
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


export class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes })
  content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}


export class ListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDialingPermissionsHrsPrefixesResponse?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;

  @Metadata()
  statusCode: number;
}
