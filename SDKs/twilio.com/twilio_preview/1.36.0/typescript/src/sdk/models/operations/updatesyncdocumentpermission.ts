import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCDOCUMENTPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncDocumentPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Manage;" })
  manage: boolean;

  @Metadata({ data: "form, name=Read;" })
  read: boolean;

  @Metadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncDocumentPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncDocumentPermissionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;

  @Metadata()
  security: UpdateSyncDocumentPermissionSecurity;
}


export class UpdateSyncDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
