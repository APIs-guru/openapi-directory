from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateRecordingSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRecordingSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRecordingSettingsSecurity = field(default=None)
    

@dataclass
class CreateRecordingSettingsResponses:
    video_v1_recording_settings: Optional[shared.VideoV1RecordingSettings] = field(default=None)
    

@dataclass
class CreateRecordingSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateRecordingSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
