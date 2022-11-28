import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDocumentPermissionServerList = [
	"https://sync.twilio.com",
] as const;


export class ListDocumentPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDocumentPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDocumentPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDocumentPermissionListDocumentPermissionResponseMeta extends SpeakeasyBase {
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


export class ListDocumentPermissionListDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDocumentPermissionListDocumentPermissionResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceDocumentDocumentPermission })
  permissions?: shared.SyncV1ServiceDocumentDocumentPermission[];
}


export class ListDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDocumentPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDocumentPermissionQueryParams;

  @SpeakeasyMetadata()
  security: ListDocumentPermissionSecurity;
}


export class ListDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDocumentPermissionResponse?: ListDocumentPermissionListDocumentPermissionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
