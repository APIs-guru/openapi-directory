import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCLISTPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncListPermissionPathParams;

  @Metadata()
  queryParams: ListSyncSyncListPermissionQueryParams;

  @Metadata()
  security: ListSyncSyncListPermissionSecurity;
}


export class ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListPermissionListSyncSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncListSyncListPermission })
  permissions?: shared.PreviewSyncServiceSyncListSyncListPermission[];
}


export class ListSyncSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncListPermissionResponse?: ListSyncSyncListPermissionListSyncSyncListPermissionResponse;

  @Metadata()
  statusCode: number;
}
