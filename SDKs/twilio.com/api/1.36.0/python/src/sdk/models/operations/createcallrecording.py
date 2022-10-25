from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    
class CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCallRecordingCreateCallRecordingRequest:
    recording_channels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_event: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackEvent' }})
    recording_status_callback_method: Optional[CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    recording_track: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RecordingTrack' }})
    trim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    

@dataclass
class CreateCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCallRecordingPathParams = field(default=None)
    request: Optional[CreateCallRecordingCreateCallRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCallRecordingSecurity = field(default=None)
    

@dataclass
class CreateCallRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
