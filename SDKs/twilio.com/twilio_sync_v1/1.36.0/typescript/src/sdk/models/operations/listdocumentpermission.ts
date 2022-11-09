import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDOCUMENTPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class ListDocumentPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDocumentPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDocumentPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDocumentPermissionPathParams;

  @Metadata()
  queryParams: ListDocumentPermissionQueryParams;

  @Metadata()
  security: ListDocumentPermissionSecurity;
}


export class ListDocumentPermissionListDocumentPermissionResponseMeta extends SpeakeasyBase {
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


export class ListDocumentPermissionListDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListDocumentPermissionListDocumentPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceDocumentDocumentPermission })
  permissions?: shared.SyncV1ServiceDocumentDocumentPermission[];
}


export class ListDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDocumentPermissionResponse?: ListDocumentPermissionListDocumentPermissionResponse;

  @Metadata()
  statusCode: number;
}
