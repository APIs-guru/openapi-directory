from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallRecordingRequest:
    path_params: CreateCallRecordingPathParams = field()
    security: CreateCallRecordingSecurity = field()
    request: Optional[CreateCallRecordingCreateCallRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCallRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
