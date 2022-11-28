import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncSyncListPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Manage;" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "form, name=Read;" })
  read: boolean;

  @SpeakeasyMetadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncSyncListPermissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncSyncListPermissionSecurity;
}


export class UpdateSyncSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
