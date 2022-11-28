import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteSyncSyncMapItemServerList = [
	"https://preview.twilio.com",
] as const;


export class DeleteSyncSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class DeleteSyncSyncMapItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteSyncSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteSyncSyncMapItemPathParams;

  @SpeakeasyMetadata()
  headers: DeleteSyncSyncMapItemHeaders;

  @SpeakeasyMetadata()
  security: DeleteSyncSyncMapItemSecurity;
}


export class DeleteSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
