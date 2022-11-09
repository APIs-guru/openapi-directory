import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCMAPITEM_SERVERS = [
	"https://sync.twilio.com",
];



export class CreateSyncMapItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncMapItemCreateSyncMapItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @Metadata({ data: "form, name=Data;" })
  data: any;

  @Metadata({ data: "form, name=ItemTtl;" })
  itemTtl?: number;

  @Metadata({ data: "form, name=Key;" })
  key: string;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateSyncMapItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncMapItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncMapItemPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncMapItemCreateSyncMapItemRequest;

  @Metadata()
  security: CreateSyncMapItemSecurity;
}


export class CreateSyncMapItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
