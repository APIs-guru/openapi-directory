from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateUsageTriggerPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUsageTriggerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUsageTriggerPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUsageTriggerSecurity = field(default=None)
    

@dataclass
class CreateUsageTriggerResponses:
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    

@dataclass
class CreateUsageTriggerResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUsageTriggerResponses]] = field(default=None)
    status_code: int = field(default=None)
    
