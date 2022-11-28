from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DIALING_PERMISSIONS_SETTINGS_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchDialingPermissionsSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDialingPermissionsSettingsRequest:
    security: FetchDialingPermissionsSettingsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDialingPermissionsSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_dialing_permissions_dialing_permissions_settings: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings] = field(default=None)
    
