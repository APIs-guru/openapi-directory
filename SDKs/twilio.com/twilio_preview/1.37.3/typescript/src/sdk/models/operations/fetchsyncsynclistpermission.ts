import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSyncSyncListPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class FetchSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSyncSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSyncSyncListPermissionPathParams;

  @SpeakeasyMetadata()
  security: FetchSyncSyncListPermissionSecurity;
}


export class FetchSyncSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
