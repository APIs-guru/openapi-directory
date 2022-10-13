from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskReservationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskReservationHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    
class UpdateTaskReservationRequestBodyConferenceRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateTaskReservationRequestBodyConferenceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateTaskReservationRequestBodyRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateTaskReservationRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateTaskReservationRequestBodyWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateTaskReservationRequestBodyUpdateTaskReservationRequest:
    beep: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Beep' }})
    beep_on_customer_entrance: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'BeepOnCustomerEntrance' }})
    call_accept: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CallAccept' }})
    call_from: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallFrom' }})
    call_record: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallRecord' }})
    call_status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallStatusCallbackUrl' }})
    call_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CallTimeout' }})
    call_to: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallTo' }})
    call_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallUrl' }})
    conference_record: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecord' }})
    conference_recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallback' }})
    conference_recording_status_callback_method: Optional[UpdateTaskReservationRequestBodyConferenceRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackMethod' }})
    conference_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallback' }})
    conference_status_callback_event: Optional[List[shared.TaskReservationEnumConferenceEventEnum]] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackEvent' }})
    conference_status_callback_method: Optional[UpdateTaskReservationRequestBodyConferenceStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackMethod' }})
    conference_trim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceTrim' }})
    dequeue_from: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DequeueFrom' }})
    dequeue_post_work_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DequeuePostWorkActivitySid' }})
    dequeue_record: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DequeueRecord' }})
    dequeue_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'DequeueStatusCallbackEvent' }})
    dequeue_status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DequeueStatusCallbackUrl' }})
    dequeue_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DequeueTimeout' }})
    dequeue_to: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DequeueTo' }})
    early_media: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EarlyMedia' }})
    end_conference_on_customer_exit: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnCustomerExit' }})
    end_conference_on_exit: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    from_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'From' }})
    instruction: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Instruction' }})
    max_participants: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    muted: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    post_work_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostWorkActivitySid' }})
    record: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_method: Optional[UpdateTaskReservationRequestBodyRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    redirect_accept: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'RedirectAccept' }})
    redirect_call_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RedirectCallSid' }})
    redirect_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RedirectUrl' }})
    region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Region' }})
    reservation_status: Optional[shared.TaskReservationEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'ReservationStatus' }})
    sip_auth_password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    start_conference_on_enter: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'StartConferenceOnEnter' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[List[shared.TaskReservationEnumCallStatusEnum]] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[UpdateTaskReservationRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    supervisor: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Supervisor' }})
    supervisor_mode: Optional[shared.TaskReservationEnumSupervisorModeEnum] = field(default=None, metadata={'form': { 'field_name': 'SupervisorMode' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    to: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'To' }})
    wait_method: Optional[UpdateTaskReservationRequestBodyWaitMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    worker_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WorkerActivitySid' }})
    

@dataclass
class UpdateTaskReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskReservationPathParams = field(default=None)
    headers: UpdateTaskReservationHeaders = field(default=None)
    request: Optional[UpdateTaskReservationRequestBodyUpdateTaskReservationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskReservationSecurity = field(default=None)
    

@dataclass
class UpdateTaskReservationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_task_task_reservation: Optional[shared.TaskrouterV1WorkspaceTaskTaskReservation] = field(default=None)
    
