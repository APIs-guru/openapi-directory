from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAccountSettingsRequestBodyUpdateAccountSettingsRequest:
    advanced_features: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AdvancedFeatures' }})
    subaccount_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SubaccountSid' }})
    voice_trace: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'VoiceTrace' }})
    

@dataclass
class UpdateAccountSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UpdateAccountSettingsRequestBodyUpdateAccountSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAccountSettingsSecurity = field(default=None)
    

@dataclass
class UpdateAccountSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_account_settings: Optional[shared.InsightsV1AccountSettings] = field(default=None)
    
