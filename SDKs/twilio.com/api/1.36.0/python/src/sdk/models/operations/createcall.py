from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallRequestBodyFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallRequestBodyMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallRequestBodyRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCallRequestBodyCreateCallRequest:
    application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    async_amd: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmd' }})
    async_amd_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallback' }})
    async_amd_status_callback_method: Optional[CreateCallRequestBodyAsyncAmdStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallbackMethod' }})
    byoc: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Byoc' }})
    call_reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallReason' }})
    call_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallToken' }})
    caller_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallerId' }})
    fallback_method: Optional[CreateCallRequestBodyFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    from_: str = field(default=None, metadata={'form': { 'field_name': 'From' }})
    machine_detection: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MachineDetection' }})
    machine_detection_silence_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSilenceTimeout' }})
    machine_detection_speech_end_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechEndThreshold' }})
    machine_detection_speech_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechThreshold' }})
    machine_detection_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionTimeout' }})
    method: Optional[CreateCallRequestBodyMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    record: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateCallRequestBodyRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    send_digits: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SendDigits' }})
    sip_auth_password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[CreateCallRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    trim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    twiml: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Twiml' }})
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclass
class CreateCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCallPathParams = field(default=None)
    request: Optional[CreateCallRequestBodyCreateCallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCallSecurity = field(default=None)
    

@dataclass
class CreateCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call: Optional[shared.APIV2010AccountCall] = field(default=None)
    
