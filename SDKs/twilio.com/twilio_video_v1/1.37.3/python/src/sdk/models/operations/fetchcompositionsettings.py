from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_COMPOSITION_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionSettingsRequest:
    security: FetchCompositionSettingsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCompositionSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition_settings: Optional[shared.VideoV1CompositionSettings] = field(default=None)
    
