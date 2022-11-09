import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPARTICIPANT_SERVERS = [
	"https://api.twilio.com",
];



export class CreateParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}

export enum CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestWaitMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AmdStatusCallback;" })
  amdStatusCallback?: string;

  @Metadata({ data: "form, name=AmdStatusCallbackMethod;" })
  amdStatusCallbackMethod?: CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Beep;" })
  beep?: string;

  @Metadata({ data: "form, name=Byoc;" })
  byoc?: string;

  @Metadata({ data: "form, name=CallReason;" })
  callReason?: string;

  @Metadata({ data: "form, name=CallSidToCoach;" })
  callSidToCoach?: string;

  @Metadata({ data: "form, name=CallerId;" })
  callerId?: string;

  @Metadata({ data: "form, name=Coaching;" })
  coaching?: boolean;

  @Metadata({ data: "form, name=ConferenceRecord;" })
  conferenceRecord?: string;

  @Metadata({ data: "form, name=ConferenceRecordingStatusCallback;" })
  conferenceRecordingStatusCallback?: string;

  @Metadata({ data: "form, name=ConferenceRecordingStatusCallbackEvent;" })
  conferenceRecordingStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" })
  conferenceRecordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=ConferenceStatusCallback;" })
  conferenceStatusCallback?: string;

  @Metadata({ data: "form, name=ConferenceStatusCallbackEvent;" })
  conferenceStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=ConferenceStatusCallbackMethod;" })
  conferenceStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=ConferenceTrim;" })
  conferenceTrim?: string;

  @Metadata({ data: "form, name=EarlyMedia;" })
  earlyMedia?: boolean;

  @Metadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @Metadata({ data: "form, name=From;" })
  from: string;

  @Metadata({ data: "form, name=JitterBufferSize;" })
  jitterBufferSize?: string;

  @Metadata({ data: "form, name=Label;" })
  label?: string;

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

  @Metadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @Metadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @Metadata({ data: "form, name=Record;" })
  record?: boolean;

  @Metadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @Metadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @Metadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @Metadata({ data: "form, name=Region;" })
  region?: string;

  @Metadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @Metadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @Metadata({ data: "form, name=StartConferenceOnEnter;" })
  startConferenceOnEnter?: boolean;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: string[];

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @Metadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @Metadata({ data: "form, name=To;" })
  to: string;

  @Metadata({ data: "form, name=WaitMethod;" })
  waitMethod?: CreateParticipantCreateParticipantRequestWaitMethodEnum;

  @Metadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;
}


export class CreateParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateParticipantCreateParticipantRequest;

  @Metadata()
  security: CreateParticipantSecurity;
}


export class CreateParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
