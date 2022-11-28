from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchUsageTriggerPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsageTriggerRequest:
    path_params: FetchUsageTriggerPathParams = field()
    security: FetchUsageTriggerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUsageTriggerResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    
