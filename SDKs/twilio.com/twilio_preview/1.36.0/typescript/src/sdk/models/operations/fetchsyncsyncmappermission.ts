import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSYNCSYNCMAPPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchSyncSyncMapPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class FetchSyncSyncMapPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSyncSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSyncSyncMapPermissionPathParams;

  @Metadata()
  security: FetchSyncSyncMapPermissionSecurity;
}


export class FetchSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
