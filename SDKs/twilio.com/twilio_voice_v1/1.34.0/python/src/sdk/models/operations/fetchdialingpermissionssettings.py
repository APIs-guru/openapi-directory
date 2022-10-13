from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DIALING_PERMISSIONS_SETTINGS_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchDialingPermissionsSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDialingPermissionsSettingsRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchDialingPermissionsSettingsSecurity = field(default=None)
    

@dataclass
class FetchDialingPermissionsSettingsResponses:
    voice_v1_dialing_permissions_dialing_permissions_settings: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings] = field(default=None)
    

@dataclass
class FetchDialingPermissionsSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDialingPermissionsSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
