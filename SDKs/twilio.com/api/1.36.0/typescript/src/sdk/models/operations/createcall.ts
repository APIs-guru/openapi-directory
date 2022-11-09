import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECALL_SERVERS = [
	"https://api.twilio.com",
];



export class CreateCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateCallCreateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCallCreateCallRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ApplicationSid;" })
  applicationSid?: string;

  @Metadata({ data: "form, name=AsyncAmd;" })
  asyncAmd?: string;

  @Metadata({ data: "form, name=AsyncAmdStatusCallback;" })
  asyncAmdStatusCallback?: string;

  @Metadata({ data: "form, name=AsyncAmdStatusCallbackMethod;" })
  asyncAmdStatusCallbackMethod?: CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Byoc;" })
  byoc?: string;

  @Metadata({ data: "form, name=CallReason;" })
  callReason?: string;

  @Metadata({ data: "form, name=CallToken;" })
  callToken?: string;

  @Metadata({ data: "form, name=CallerId;" })
  callerId?: string;

  @Metadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: CreateCallCreateCallRequestFallbackMethodEnum;

  @Metadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @Metadata({ data: "form, name=From;" })
  from: string;

  @Metadata({ data: "form, name=MachineDetection;" })
  machineDetection?: string;

  @Metadata({ data: "form, name=MachineDetectionSilenceTimeout;" })
  machineDetectionSilenceTimeout?: number;

  @Metadata({ data: "form, name=MachineDetectionSpeechEndThreshold;" })
  machineDetectionSpeechEndThreshold?: number;

  @Metadata({ data: "form, name=MachineDetectionSpeechThreshold;" })
  machineDetectionSpeechThreshold?: number;

  @Metadata({ data: "form, name=MachineDetectionTimeout;" })
  machineDetectionTimeout?: number;

  @Metadata({ data: "form, name=Method;" })
  method?: CreateCallCreateCallRequestMethodEnum;

  @Metadata({ data: "form, name=Record;" })
  record?: boolean;

  @Metadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @Metadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @Metadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @Metadata({ data: "form, name=SendDigits;" })
  sendDigits?: string;

  @Metadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @Metadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: string[];

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCallCreateCallRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @Metadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @Metadata({ data: "form, name=To;" })
  to: string;

  @Metadata({ data: "form, name=Trim;" })
  trim?: string;

  @Metadata({ data: "form, name=Twiml;" })
  twiml?: string;

  @Metadata({ data: "form, name=Url;" })
  url?: string;
}


export class CreateCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCallPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallCreateCallRequest;

  @Metadata()
  security: CreateCallSecurity;
}


export class CreateCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
