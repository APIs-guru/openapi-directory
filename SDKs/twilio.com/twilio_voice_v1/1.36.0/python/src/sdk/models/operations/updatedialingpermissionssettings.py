from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DIALING_PERMISSIONS_SETTINGS_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest:
    dialing_permissions_inheritance: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DialingPermissionsInheritance' }})
    

@dataclass
class UpdateDialingPermissionsSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDialingPermissionsSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDialingPermissionsSettingsSecurity = field(default=None)
    

@dataclass
class UpdateDialingPermissionsSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_dialing_permissions_dialing_permissions_settings: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings] = field(default=None)
    
