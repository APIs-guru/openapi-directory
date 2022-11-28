import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCallRecordingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateCallRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}

export enum CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCallRecordingCreateCallRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: string;
}


export class CreateCallRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCallRecordingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallRecordingCreateCallRecordingRequest;

  @SpeakeasyMetadata()
  security: CreateCallRecordingSecurity;
}


export class CreateCallRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
