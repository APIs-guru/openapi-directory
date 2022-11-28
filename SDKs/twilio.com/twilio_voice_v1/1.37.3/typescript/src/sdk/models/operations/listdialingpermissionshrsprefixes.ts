import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDialingPermissionsHrsPrefixesServerList = [
	"https://voice.twilio.com",
] as const;


export class ListDialingPermissionsHrsPrefixesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCode" })
  isoCode: string;
}


export class ListDialingPermissionsHrsPrefixesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDialingPermissionsHrsPrefixesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta extends SpeakeasyBase {
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


export class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes })
  content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}


export class ListDialingPermissionsHrsPrefixesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDialingPermissionsHrsPrefixesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDialingPermissionsHrsPrefixesQueryParams;

  @SpeakeasyMetadata()
  security: ListDialingPermissionsHrsPrefixesSecurity;
}


export class ListDialingPermissionsHrsPrefixesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDialingPermissionsHrsPrefixesResponse?: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
