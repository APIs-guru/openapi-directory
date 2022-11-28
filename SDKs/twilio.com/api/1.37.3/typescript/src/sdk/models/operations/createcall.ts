import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCallServerList = [
	"https://api.twilio.com",
] as const;


export class CreateCallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCallCreateCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ApplicationSid;" })
  applicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AsyncAmd;" })
  asyncAmd?: string;

  @SpeakeasyMetadata({ data: "form, name=AsyncAmdStatusCallback;" })
  asyncAmdStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=AsyncAmdStatusCallbackMethod;" })
  asyncAmdStatusCallbackMethod?: CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Byoc;" })
  byoc?: string;

  @SpeakeasyMetadata({ data: "form, name=CallReason;" })
  callReason?: string;

  @SpeakeasyMetadata({ data: "form, name=CallToken;" })
  callToken?: string;

  @SpeakeasyMetadata({ data: "form, name=CallerId;" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: CreateCallCreateCallRequestFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=From;" })
  from: string;

  @SpeakeasyMetadata({ data: "form, name=MachineDetection;" })
  machineDetection?: string;

  @SpeakeasyMetadata({ data: "form, name=MachineDetectionSilenceTimeout;" })
  machineDetectionSilenceTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=MachineDetectionSpeechEndThreshold;" })
  machineDetectionSpeechEndThreshold?: number;

  @SpeakeasyMetadata({ data: "form, name=MachineDetectionSpeechThreshold;" })
  machineDetectionSpeechThreshold?: number;

  @SpeakeasyMetadata({ data: "form, name=MachineDetectionTimeout;" })
  machineDetectionTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method?: CreateCallCreateCallRequestMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Record;" })
  record?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @SpeakeasyMetadata({ data: "form, name=SendDigits;" })
  sendDigits?: string;

  @SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCallCreateCallRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: string;

  @SpeakeasyMetadata({ data: "form, name=Twiml;" })
  twiml?: string;

  @SpeakeasyMetadata({ data: "form, name=Url;" })
  url?: string;
}


export class CreateCallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallCreateCallRequest;

  @SpeakeasyMetadata()
  security: CreateCallSecurity;
}


export class CreateCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
