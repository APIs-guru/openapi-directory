import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncListPermissionServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateSyncListPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncListPermissionUpdateSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Manage;" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "form, name=Read;" })
  read: boolean;

  @SpeakeasyMetadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncListPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncListPermissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncListPermissionUpdateSyncListPermissionRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncListPermissionSecurity;
}


export class UpdateSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncListSyncListPermission?: shared.SyncV1ServiceSyncListSyncListPermission;
}
