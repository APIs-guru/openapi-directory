import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCallRecordingServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateCallRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCallRecordingUpdateCallRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PauseBehavior;" })
  pauseBehavior?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.CallRecordingEnumStatusEnum;
}


export class UpdateCallRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCallRecordingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallRecordingUpdateCallRecordingRequest;

  @SpeakeasyMetadata()
  security: UpdateCallRecordingSecurity;
}


export class UpdateCallRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
