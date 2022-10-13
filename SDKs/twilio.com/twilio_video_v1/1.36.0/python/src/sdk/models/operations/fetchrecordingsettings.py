from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRecordingSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingSettingsRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchRecordingSettingsSecurity = field(default=None)
    

@dataclass
class FetchRecordingSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_recording_settings: Optional[shared.VideoV1RecordingSettings] = field(default=None)
    
