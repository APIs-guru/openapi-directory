import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncMapPermissionServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateSyncMapPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Manage;" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "form, name=Read;" })
  read: boolean;

  @SpeakeasyMetadata({ data: "form, name=Write;" })
  write: boolean;
}


export class UpdateSyncMapPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncMapPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncMapPermissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncMapPermissionSecurity;
}


export class UpdateSyncMapPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
