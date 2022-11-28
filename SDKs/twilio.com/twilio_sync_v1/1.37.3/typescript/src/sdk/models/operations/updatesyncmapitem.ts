import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSyncMapItemServerList = [
	"https://sync.twilio.com",
] as const;


export class UpdateSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncMapItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncMapItemUpdateSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data?: any;

  @SpeakeasyMetadata({ data: "form, name=ItemTtl;" })
  itemTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSyncMapItemPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSyncMapItemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncMapItemUpdateSyncMapItemRequest;

  @SpeakeasyMetadata()
  security: UpdateSyncMapItemSecurity;
}


export class UpdateSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
