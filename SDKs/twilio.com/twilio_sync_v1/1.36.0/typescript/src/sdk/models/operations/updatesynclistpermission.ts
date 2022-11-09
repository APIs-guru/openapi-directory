import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCLISTPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncListPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncListPermissionUpdateSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Manage;" })
  manage: boolean;

  @Metadata({ data: "form, name=Read;" })
  read: boolean;

  @Metadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncListPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncListPermissionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncListPermissionUpdateSyncListPermissionRequest;

  @Metadata()
  security: UpdateSyncListPermissionSecurity;
}


export class UpdateSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncListSyncListPermission?: shared.SyncV1ServiceSyncListSyncListPermission;
}
