import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncSyncMapItemServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data: any;

  @SpeakeasyMetadata({ data: "form, name=Key;" })
  key: string;
}


export class CreateSyncSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncSyncMapItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;

  @SpeakeasyMetadata()
  security: CreateSyncSyncMapItemSecurity;
}


export class CreateSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
