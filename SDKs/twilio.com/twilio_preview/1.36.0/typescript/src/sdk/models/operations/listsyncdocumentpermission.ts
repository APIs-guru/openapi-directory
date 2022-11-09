import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCDOCUMENTPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncDocumentPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncDocumentPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncDocumentPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncDocumentPermissionPathParams;

  @Metadata()
  queryParams: ListSyncDocumentPermissionQueryParams;

  @Metadata()
  security: ListSyncDocumentPermissionSecurity;
}


export class ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta extends SpeakeasyBase {
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


export class ListSyncDocumentPermissionListSyncDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceDocumentDocumentPermission })
  permissions?: shared.PreviewSyncServiceDocumentDocumentPermission[];
}


export class ListSyncDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncDocumentPermissionResponse?: ListSyncDocumentPermissionListSyncDocumentPermissionResponse;

  @Metadata()
  statusCode: number;
}
