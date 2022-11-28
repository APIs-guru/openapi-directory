import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchRecordingAddOnResultPayloadServerList = [
	"https://api.twilio.com",
] as const;


export class FetchRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" })
  addOnResultSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchRecordingAddOnResultPayloadPathParams;

  @SpeakeasyMetadata()
  security: FetchRecordingAddOnResultPayloadSecurity;
}


export class FetchRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
}
