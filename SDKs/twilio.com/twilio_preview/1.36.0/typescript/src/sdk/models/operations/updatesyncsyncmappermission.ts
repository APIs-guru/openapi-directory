import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSYNCMAPPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncSyncMapPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Manage;" })
  manage: boolean;

  @Metadata({ data: "form, name=Read;" })
  read: boolean;

  @Metadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncSyncMapPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncSyncMapPermissionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;

  @Metadata()
  security: UpdateSyncSyncMapPermissionSecurity;
}


export class UpdateSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
