import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSYNCMAPITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncSyncMapItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncMapItemHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;
}


export class UpdateSyncSyncMapItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncMapItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncSyncMapItemPathParams;

  @Metadata()
  headers: UpdateSyncSyncMapItemHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;

  @Metadata()
  security: UpdateSyncSyncMapItemSecurity;
}


export class UpdateSyncSyncMapItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
