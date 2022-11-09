import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSYNCLISTPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Manage;" })
  manage: boolean;

  @Metadata({ data: "form, name=Read;" })
  read: boolean;

  @Metadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncSyncListPermissionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;

  @Metadata()
  security: UpdateSyncSyncListPermissionSecurity;
}


export class UpdateSyncSyncListPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
