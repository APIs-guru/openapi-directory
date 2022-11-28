from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class UpdateAccountSettingsUpdateAccountSettingsRequest:
    advanced_features: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AdvancedFeatures' }})
    subaccount_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SubaccountSid' }})
    voice_trace: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'VoiceTrace' }})
    

@dataclass
class UpdateAccountSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountSettingsRequest:
    security: UpdateAccountSettingsSecurity = field()
    request: Optional[UpdateAccountSettingsUpdateAccountSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAccountSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_account_settings: Optional[shared.InsightsV1AccountSettings] = field(default=None)
    
