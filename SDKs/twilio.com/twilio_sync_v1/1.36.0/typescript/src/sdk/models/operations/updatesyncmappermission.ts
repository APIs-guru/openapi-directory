import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCMAPPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncMapPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Manage;" })
  manage: boolean;

  @Metadata({ data: "form, name=Read;" })
  read: boolean;

  @Metadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncMapPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncMapPermissionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;

  @Metadata()
  security: UpdateSyncMapPermissionSecurity;
}


export class UpdateSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
