import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSyncSyncMapItemServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchSyncSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class FetchSyncSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSyncSyncMapItemPathParams;

  @SpeakeasyMetadata()
  security: FetchSyncSyncMapItemSecurity;
}


export class FetchSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
