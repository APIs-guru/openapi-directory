import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONFERENCERECORDING_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateConferenceRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConferenceRecordingUpdateConferenceRecordingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PauseBehavior;" })
  pauseBehavior?: string;

  @Metadata({ data: "form, name=Status;" })
  status: shared.ConferenceRecordingEnumStatusEnum;
}


export class UpdateConferenceRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConferenceRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConferenceRecordingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConferenceRecordingUpdateConferenceRecordingRequest;

  @Metadata()
  security: UpdateConferenceRecordingSecurity;
}


export class UpdateConferenceRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
