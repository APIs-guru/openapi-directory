import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncSyncListItemServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncSyncListItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncListItemCreateSyncSyncListItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data: any;
}


export class CreateSyncSyncListItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncListItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncSyncListItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncListItemCreateSyncSyncListItemRequest;

  @SpeakeasyMetadata()
  security: CreateSyncSyncListItemSecurity;
}


export class CreateSyncSyncListItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
