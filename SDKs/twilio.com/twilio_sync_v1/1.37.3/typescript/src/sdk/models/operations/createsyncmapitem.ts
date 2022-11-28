import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncMapItemServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncMapItemCreateSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data: any;

  @SpeakeasyMetadata({ data: "form, name=ItemTtl;" })
  itemTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Key;" })
  key: string;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncMapItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncMapItemCreateSyncMapItemRequest;

  @SpeakeasyMetadata()
  security: CreateSyncMapItemSecurity;
}


export class CreateSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
