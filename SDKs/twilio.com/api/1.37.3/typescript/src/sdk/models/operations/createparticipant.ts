import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateParticipantServerList = [
	"https://api.twilio.com",
] as const;


export class CreateParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}

export enum CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateParticipantCreateParticipantRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AmdStatusCallback;" })
  amdStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=AmdStatusCallbackMethod;" })
  amdStatusCallbackMethod?: CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Beep;" })
  beep?: string;

  @SpeakeasyMetadata({ data: "form, name=Byoc;" })
  byoc?: string;

  @SpeakeasyMetadata({ data: "form, name=CallReason;" })
  callReason?: string;

  @SpeakeasyMetadata({ data: "form, name=CallSidToCoach;" })
  callSidToCoach?: string;

  @SpeakeasyMetadata({ data: "form, name=CallerId;" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "form, name=Coaching;" })
  coaching?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecord;" })
  conferenceRecord?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallback;" })
  conferenceRecordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallbackEvent;" })
  conferenceRecordingStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" })
  conferenceRecordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallback;" })
  conferenceStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackEvent;" })
  conferenceStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackMethod;" })
  conferenceStatusCallbackMethod?: CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=ConferenceTrim;" })
  conferenceTrim?: string;

  @SpeakeasyMetadata({ data: "form, name=EarlyMedia;" })
  earlyMedia?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=From;" })
  from: string;

  @SpeakeasyMetadata({ data: "form, name=JitterBufferSize;" })
  jitterBufferSize?: string;

  @SpeakeasyMetadata({ data: "form, name=Label;" })
  label?: string;

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

  @SpeakeasyMetadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Record;" })
  record?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackEvent;" })
  recordingStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=RecordingTrack;" })
  recordingTrack?: string;

  @SpeakeasyMetadata({ data: "form, name=Region;" })
  region?: string;

  @SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @SpeakeasyMetadata({ data: "form, name=StartConferenceOnEnter;" })
  startConferenceOnEnter?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;

  @SpeakeasyMetadata({ data: "form, name=WaitMethod;" })
  waitMethod?: CreateParticipantCreateParticipantRequestWaitMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;
}


export class CreateParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateParticipantCreateParticipantRequest;

  @SpeakeasyMetadata()
  security: CreateParticipantSecurity;
}


export class CreateParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
