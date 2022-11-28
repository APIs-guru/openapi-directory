import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConferenceRecordingServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateConferenceRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConferenceRecordingUpdateConferenceRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PauseBehavior;" })
  pauseBehavior?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.ConferenceRecordingEnumStatusEnum;
}


export class UpdateConferenceRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConferenceRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateConferenceRecordingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConferenceRecordingUpdateConferenceRecordingRequest;

  @SpeakeasyMetadata()
  security: UpdateConferenceRecordingSecurity;
}


export class UpdateConferenceRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
