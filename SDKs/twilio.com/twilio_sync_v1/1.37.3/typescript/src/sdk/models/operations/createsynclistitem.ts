import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncListItemServerList = [
	"https://sync.twilio.com",
] as const;


export class CreateSyncListItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncListItemCreateSyncListItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data: any;

  @SpeakeasyMetadata({ data: "form, name=ItemTtl;" })
  itemTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateSyncListItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncListItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncListItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncListItemCreateSyncListItemRequest;

  @SpeakeasyMetadata()
  security: CreateSyncListItemSecurity;
}


export class CreateSyncListItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
