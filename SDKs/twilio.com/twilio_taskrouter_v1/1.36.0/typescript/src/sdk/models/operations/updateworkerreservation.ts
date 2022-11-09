import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWORKERRESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateWorkerReservationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateWorkerReservationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}

export enum UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateWorkerReservationUpdateWorkerReservationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Beep;" })
  beep?: string;

  @Metadata({ data: "form, name=BeepOnCustomerEntrance;" })
  beepOnCustomerEntrance?: boolean;

  @Metadata({ data: "form, name=CallAccept;" })
  callAccept?: boolean;

  @Metadata({ data: "form, name=CallFrom;" })
  callFrom?: string;

  @Metadata({ data: "form, name=CallRecord;" })
  callRecord?: string;

  @Metadata({ data: "form, name=CallStatusCallbackUrl;" })
  callStatusCallbackUrl?: string;

  @Metadata({ data: "form, name=CallTimeout;" })
  callTimeout?: number;

  @Metadata({ data: "form, name=CallTo;" })
  callTo?: string;

  @Metadata({ data: "form, name=CallUrl;" })
  callUrl?: string;

  @Metadata({ data: "form, name=ConferenceRecord;" })
  conferenceRecord?: string;

  @Metadata({ data: "form, name=ConferenceRecordingStatusCallback;" })
  conferenceRecordingStatusCallback?: string;

  @Metadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" })
  conferenceRecordingStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=ConferenceStatusCallback;" })
  conferenceStatusCallback?: string;

  @Metadata({ data: "form, name=ConferenceStatusCallbackEvent;" })
  conferenceStatusCallbackEvent?: shared.WorkerReservationEnumConferenceEventEnum[];

  @Metadata({ data: "form, name=ConferenceStatusCallbackMethod;" })
  conferenceStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=ConferenceTrim;" })
  conferenceTrim?: string;

  @Metadata({ data: "form, name=DequeueFrom;" })
  dequeueFrom?: string;

  @Metadata({ data: "form, name=DequeuePostWorkActivitySid;" })
  dequeuePostWorkActivitySid?: string;

  @Metadata({ data: "form, name=DequeueRecord;" })
  dequeueRecord?: string;

  @Metadata({ data: "form, name=DequeueStatusCallbackEvent;" })
  dequeueStatusCallbackEvent?: string[];

  @Metadata({ data: "form, name=DequeueStatusCallbackUrl;" })
  dequeueStatusCallbackUrl?: string;

  @Metadata({ data: "form, name=DequeueTimeout;" })
  dequeueTimeout?: number;

  @Metadata({ data: "form, name=DequeueTo;" })
  dequeueTo?: string;

  @Metadata({ data: "form, name=EarlyMedia;" })
  earlyMedia?: boolean;

  @Metadata({ data: "form, name=EndConferenceOnCustomerExit;" })
  endConferenceOnCustomerExit?: boolean;

  @Metadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @Metadata({ data: "form, name=From;" })
  from?: string;

  @Metadata({ data: "form, name=Instruction;" })
  instruction?: string;

  @Metadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @Metadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @Metadata({ data: "form, name=PostWorkActivitySid;" })
  postWorkActivitySid?: string;

  @Metadata({ data: "form, name=Record;" })
  record?: boolean;

  @Metadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @Metadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @Metadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=RedirectAccept;" })
  redirectAccept?: boolean;

  @Metadata({ data: "form, name=RedirectCallSid;" })
  redirectCallSid?: string;

  @Metadata({ data: "form, name=RedirectUrl;" })
  redirectUrl?: string;

  @Metadata({ data: "form, name=Region;" })
  region?: string;

  @Metadata({ data: "form, name=ReservationStatus;" })
  reservationStatus?: shared.WorkerReservationEnumStatusEnum;

  @Metadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @Metadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @Metadata({ data: "form, name=StartConferenceOnEnter;" })
  startConferenceOnEnter?: boolean;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: shared.WorkerReservationEnumCallStatusEnum[];

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @Metadata({ data: "form, name=To;" })
  to?: string;

  @Metadata({ data: "form, name=WaitMethod;" })
  waitMethod?: UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum;

  @Metadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;

  @Metadata({ data: "form, name=WorkerActivitySid;" })
  workerActivitySid?: string;
}


export class UpdateWorkerReservationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkerReservationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWorkerReservationPathParams;

  @Metadata()
  headers: UpdateWorkerReservationHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkerReservationUpdateWorkerReservationRequest;

  @Metadata()
  security: UpdateWorkerReservationSecurity;
}


export class UpdateWorkerReservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkerWorkerReservation?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation;
}
