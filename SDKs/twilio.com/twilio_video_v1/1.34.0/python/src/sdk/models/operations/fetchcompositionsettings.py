from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_COMPOSITION_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionSettingsRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchCompositionSettingsSecurity = field(default=None)
    

@dataclass
class FetchCompositionSettingsResponses:
    video_v1_composition_settings: Optional[shared.VideoV1CompositionSettings] = field(default=None)
    

@dataclass
class FetchCompositionSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCompositionSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
