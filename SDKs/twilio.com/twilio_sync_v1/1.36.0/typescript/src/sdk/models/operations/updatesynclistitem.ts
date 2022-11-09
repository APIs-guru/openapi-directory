import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCLISTITEM_SERVERS = [
	"https://sync.twilio.com",
];



export class UpdateSyncListItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncListItemHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncListItemUpdateSyncListItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CollectionTtl;" })
  collectionTtl?: number;

  @Metadata({ data: "form, name=Data;" })
  data?: any;

  @Metadata({ data: "form, name=ItemTtl;" })
  itemTtl?: number;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSyncListItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncListItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncListItemPathParams;

  @Metadata()
  headers: UpdateSyncListItemHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncListItemUpdateSyncListItemRequest;

  @Metadata()
  security: UpdateSyncListItemSecurity;
}


export class UpdateSyncListItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
