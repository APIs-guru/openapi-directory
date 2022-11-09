import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECALLRECORDING_SERVERS = [
	"https://api.twilio.com",
];



export class CreateCallRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}

export enum CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCallRecordingCreateCallRecordingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @Metadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @Metadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @Metadata({ data: "form, name=Trim;" })
  trim?: string;
}


export class CreateCallRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCallRecordingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallRecordingCreateCallRecordingRequest;

  @Metadata()
  security: CreateCallRecordingSecurity;
}


export class CreateCallRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
