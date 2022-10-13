from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAccountSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAccountSettingsSecurity = field(default=None)
    

@dataclass
class UpdateAccountSettingsResponses:
    insights_v1_account_settings: Optional[shared.InsightsV1AccountSettings] = field(default=None)
    

@dataclass
class UpdateAccountSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAccountSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
