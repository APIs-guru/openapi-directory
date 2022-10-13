from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateRecordingPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRecordingRequestBodyUpdateRecordingRequest:
    mode: Optional[shared.RecordingEnumRecordingModeEnum] = field(default=None, metadata={'form': { 'field_name': 'Mode' }})
    trim: Optional[shared.RecordingEnumRecordingTrimEnum] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    

@dataclass
class UpdateRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRecordingPathParams = field(default=None)
    request: Optional[UpdateRecordingRequestBodyUpdateRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRecordingSecurity = field(default=None)
    

@dataclass
class UpdateRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_recording: Optional[shared.TrunkingV1TrunkRecording] = field(default=None)
    
