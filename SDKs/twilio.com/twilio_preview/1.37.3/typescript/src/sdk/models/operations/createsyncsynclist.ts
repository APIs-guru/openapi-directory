import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncSyncListServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncSyncListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSyncSyncListCreateSyncSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSyncSyncListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSyncSyncListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncSyncListCreateSyncSyncListRequest;

  @SpeakeasyMetadata()
  security: CreateSyncSyncListSecurity;
}


export class CreateSyncSyncListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncServiceSyncList?: shared.PreviewSyncServiceSyncList;
}
