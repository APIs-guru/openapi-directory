import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTaskReservationServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class UpdateTaskReservationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskReservationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}

export enum UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateTaskReservationUpdateTaskReservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Beep;" })
  beep?: string;

  @SpeakeasyMetadata({ data: "form, name=BeepOnCustomerEntrance;" })
  beepOnCustomerEntrance?: boolean;

  @SpeakeasyMetadata({ data: "form, name=CallAccept;" })
  callAccept?: boolean;

  @SpeakeasyMetadata({ data: "form, name=CallFrom;" })
  callFrom?: string;

  @SpeakeasyMetadata({ data: "form, name=CallRecord;" })
  callRecord?: string;

  @SpeakeasyMetadata({ data: "form, name=CallStatusCallbackUrl;" })
  callStatusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=CallTimeout;" })
  callTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=CallTo;" })
  callTo?: string;

  @SpeakeasyMetadata({ data: "form, name=CallUrl;" })
  callUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecord;" })
  conferenceRecord?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallback;" })
  conferenceRecordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" })
  conferenceRecordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallback;" })
  conferenceStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackEvent;" })
  conferenceStatusCallbackEvent?: shared.TaskReservationEnumConferenceEventEnum[];

  @SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackMethod;" })
  conferenceStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=ConferenceTrim;" })
  conferenceTrim?: string;

  @SpeakeasyMetadata({ data: "form, name=DequeueFrom;" })
  dequeueFrom?: string;

  @SpeakeasyMetadata({ data: "form, name=DequeuePostWorkActivitySid;" })
  dequeuePostWorkActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=DequeueRecord;" })
  dequeueRecord?: string;

  @SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackEvent;" })
  dequeueStatusCallbackEvent?: string[];

  @SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackUrl;" })
  dequeueStatusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=DequeueTimeout;" })
  dequeueTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=DequeueTo;" })
  dequeueTo?: string;

  @SpeakeasyMetadata({ data: "form, name=EarlyMedia;" })
  earlyMedia?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EndConferenceOnCustomerExit;" })
  endConferenceOnCustomerExit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=EndConferenceOnExit;" })
  endConferenceOnExit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=From;" })
  from?: string;

  @SpeakeasyMetadata({ data: "form, name=Instruction;" })
  instruction?: string;

  @SpeakeasyMetadata({ data: "form, name=MaxParticipants;" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "form, name=Muted;" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=PostWorkActivitySid;" })
  postWorkActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=Record;" })
  record?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RecordingChannels;" })
  recordingChannels?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" })
  recordingStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" })
  recordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=RedirectAccept;" })
  redirectAccept?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RedirectCallSid;" })
  redirectCallSid?: string;

  @SpeakeasyMetadata({ data: "form, name=RedirectUrl;" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Region;" })
  region?: string;

  @SpeakeasyMetadata({ data: "form, name=ReservationStatus;" })
  reservationStatus?: shared.TaskReservationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" })
  sipAuthPassword?: string;

  @SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" })
  sipAuthUsername?: string;

  @SpeakeasyMetadata({ data: "form, name=StartConferenceOnEnter;" })
  startConferenceOnEnter?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" })
  statusCallbackEvent?: shared.TaskReservationEnumCallStatusEnum[];

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Supervisor;" })
  supervisor?: string;

  @SpeakeasyMetadata({ data: "form, name=SupervisorMode;" })
  supervisorMode?: shared.TaskReservationEnumSupervisorModeEnum;

  @SpeakeasyMetadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to?: string;

  @SpeakeasyMetadata({ data: "form, name=WaitMethod;" })
  waitMethod?: UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=WaitUrl;" })
  waitUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=WorkerActivitySid;" })
  workerActivitySid?: string;
}


export class UpdateTaskReservationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskReservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTaskReservationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTaskReservationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskReservationUpdateTaskReservationRequest;

  @SpeakeasyMetadata()
  security: UpdateTaskReservationSecurity;
}


export class UpdateTaskReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskTaskReservation?: shared.TaskrouterV1WorkspaceTaskTaskReservation;
}
