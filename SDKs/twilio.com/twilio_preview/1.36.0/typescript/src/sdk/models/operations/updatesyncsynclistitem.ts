import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESYNCSYNCLISTITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateSyncSyncListItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateSyncSyncListItemHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateSyncSyncListItemUpdateSyncSyncListItemRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Data;" })
  data: any;
}


export class UpdateSyncSyncListItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSyncSyncListItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSyncSyncListItemPathParams;

  @Metadata()
  headers: UpdateSyncSyncListItemHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;

  @Metadata()
  security: UpdateSyncSyncListItemSecurity;
}


export class UpdateSyncSyncListItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
