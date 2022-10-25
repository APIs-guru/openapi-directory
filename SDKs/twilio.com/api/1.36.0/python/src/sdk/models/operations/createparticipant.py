from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    
class CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateParticipantCreateParticipantRequestWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateParticipantCreateParticipantRequest:
    amd_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AmdStatusCallback' }})
    amd_status_callback_method: Optional[CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AmdStatusCallbackMethod' }})
    beep: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Beep' }})
    byoc: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Byoc' }})
    call_reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallReason' }})
    call_sid_to_coach: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallSidToCoach' }})
    caller_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallerId' }})
    coaching: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Coaching' }})
    conference_record: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecord' }})
    conference_recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallback' }})
    conference_recording_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackEvent' }})
    conference_recording_status_callback_method: Optional[CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackMethod' }})
    conference_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallback' }})
    conference_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackEvent' }})
    conference_status_callback_method: Optional[CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackMethod' }})
    conference_trim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConferenceTrim' }})
    early_media: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EarlyMedia' }})
    end_conference_on_exit: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    from_: str = field(default=None, metadata={'form': { 'field_name': 'From' }})
    jitter_buffer_size: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'JitterBufferSize' }})
    label: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Label' }})
    machine_detection: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MachineDetection' }})
    machine_detection_silence_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSilenceTimeout' }})
    machine_detection_speech_end_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechEndThreshold' }})
    machine_detection_speech_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechThreshold' }})
    machine_detection_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionTimeout' }})
    max_participants: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    muted: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    record: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Region' }})
    sip_auth_password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    start_conference_on_enter: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'StartConferenceOnEnter' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    wait_method: Optional[CreateParticipantCreateParticipantRequestWaitMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    

@dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateParticipantPathParams = field(default=None)
    request: Optional[CreateParticipantCreateParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateParticipantSecurity = field(default=None)
    

@dataclass
class CreateParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_conference_participant: Optional[shared.APIV2010AccountConferenceParticipant] = field(default=None)
    
