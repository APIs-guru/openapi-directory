import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESYNCSYNCLISTITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateSyncSyncListItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncListItemCreateSyncSyncListItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;
}


export class CreateSyncSyncListItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncListItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSyncSyncListItemPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncListItemCreateSyncSyncListItemRequest;

  @Metadata()
  security: CreateSyncSyncListItemSecurity;
}


export class CreateSyncSyncListItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
