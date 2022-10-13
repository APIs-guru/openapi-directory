from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_COMPOSITION_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateCompositionSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCompositionSettingsSecurity = field(default=None)
    

@dataclass
class CreateCompositionSettingsResponses:
    video_v1_composition_settings: Optional[shared.VideoV1CompositionSettings] = field(default=None)
    

@dataclass
class CreateCompositionSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCompositionSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
