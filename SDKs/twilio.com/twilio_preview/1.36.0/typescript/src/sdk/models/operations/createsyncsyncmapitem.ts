import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCSYNCMAPITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateSyncSyncMapItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;

  @Metadata({ data: "form, name=Key;" })
  key: string;
}


export class CreateSyncSyncMapItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncMapItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncSyncMapItemPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;

  @Metadata()
  security: CreateSyncSyncMapItemSecurity;
}


export class CreateSyncSyncMapItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
