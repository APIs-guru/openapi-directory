from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateRecordingPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRecordingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRecordingSecurity = field(default=None)
    

@dataclass
class UpdateRecordingResponses:
    trunking_v1_trunk_recording: Optional[shared.TrunkingV1TrunkRecording] = field(default=None)
    

@dataclass
class UpdateRecordingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateRecordingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
