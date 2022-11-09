import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECALLRECORDING_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateCallRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCallRecordingUpdateCallRecordingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PauseBehavior;" })
  pauseBehavior?: string;

  @Metadata({ data: "form, name=Status;" })
  status: shared.CallRecordingEnumStatusEnum;
}


export class UpdateCallRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCallRecordingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallRecordingUpdateCallRecordingRequest;

  @Metadata()
  security: UpdateCallRecordingSecurity;
}


export class UpdateCallRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
