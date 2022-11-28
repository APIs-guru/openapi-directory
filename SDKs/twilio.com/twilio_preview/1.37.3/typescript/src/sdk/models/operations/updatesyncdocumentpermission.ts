import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncDocumentPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateSyncDocumentPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Manage;" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "form, name=Read;" })
  read: boolean;

  @SpeakeasyMetadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncDocumentPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncDocumentPermissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncDocumentPermissionSecurity;
}


export class UpdateSyncDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
