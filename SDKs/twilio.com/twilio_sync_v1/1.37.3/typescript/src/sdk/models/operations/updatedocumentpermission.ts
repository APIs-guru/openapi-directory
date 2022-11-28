import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDocumentPermissionServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateDocumentPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" })
  documentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateDocumentPermissionUpdateDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Manage;" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "form, name=Read;" })
  read: boolean;

  @SpeakeasyMetadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateDocumentPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDocumentPermissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDocumentPermissionUpdateDocumentPermissionRequest;

  @SpeakeasyMetadata()
  security: UpdateDocumentPermissionSecurity;
}


export class UpdateDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceDocumentDocumentPermission?: shared.SyncV1ServiceDocumentDocumentPermission;
}
