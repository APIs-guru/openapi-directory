import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncSyncMapItemServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateSyncSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncMapItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data: any;
}


export class UpdateSyncSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncSyncMapItemPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSyncSyncMapItemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncSyncMapItemSecurity;
}


export class UpdateSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
