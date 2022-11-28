import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncListPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListPermissionListSyncSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncListSyncListPermission })
  permissions?: shared.PreviewSyncServiceSyncListSyncListPermission[];
}


export class ListSyncSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncListPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncListPermissionQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncListPermissionSecurity;
}


export class ListSyncSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncListPermissionResponse?: ListSyncSyncListPermissionListSyncSyncListPermissionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
