import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteSyncSyncListPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class DeleteSyncSyncListPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class DeleteSyncSyncListPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSyncSyncListPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteSyncSyncListPermissionPathParams;

  @SpeakeasyMetadata()
  security: DeleteSyncSyncListPermissionSecurity;
}


export class DeleteSyncSyncListPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
