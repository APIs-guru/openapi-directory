from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateCallCreateCallRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCallCreateCallRequest:
    from_: str = field(metadata={'form': { 'field_name': 'From' }})
    to: str = field(metadata={'form': { 'field_name': 'To' }})
    application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    async_amd: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmd' }})
    async_amd_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallback' }})
    async_amd_status_callback_method: Optional[CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AsyncAmdStatusCallbackMethod' }})
    byoc: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Byoc' }})
    call_reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallReason' }})
    call_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallToken' }})
    caller_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallerId' }})
    fallback_method: Optional[CreateCallCreateCallRequestFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    machine_detection: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MachineDetection' }})
    machine_detection_silence_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSilenceTimeout' }})
    machine_detection_speech_end_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechEndThreshold' }})
    machine_detection_speech_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionSpeechThreshold' }})
    machine_detection_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MachineDetectionTimeout' }})
    method: Optional[CreateCallCreateCallRequestMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    record: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    send_digits: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SendDigits' }})
    sip_auth_password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[CreateCallCreateCallRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    trim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    twiml: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Twiml' }})
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclass
class CreateCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallRequest:
    path_params: CreateCallPathParams = field()
    security: CreateCallSecurity = field()
    request: Optional[CreateCallCreateCallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCallResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call: Optional[shared.APIV2010AccountCall] = field(default=None)
    
