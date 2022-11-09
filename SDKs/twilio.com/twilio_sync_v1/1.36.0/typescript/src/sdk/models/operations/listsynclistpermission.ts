import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCLISTPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncListPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncListPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncListPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncListPermissionPathParams;

  @Metadata()
  queryParams: ListSyncListPermissionQueryParams;

  @Metadata()
  security: ListSyncListPermissionSecurity;
}


export class ListSyncListPermissionListSyncListPermissionResponseMeta extends SpeakeasyBase {
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


export class ListSyncListPermissionListSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncListPermissionListSyncListPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceSyncListSyncListPermission })
  permissions?: shared.SyncV1ServiceSyncListSyncListPermission[];
}


export class ListSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncListPermissionResponse?: ListSyncListPermissionListSyncListPermissionResponse;

  @Metadata()
  statusCode: number;
}
