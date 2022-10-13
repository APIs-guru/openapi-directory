from dataclasses import dataclass, field
from typing import Optional
DELETE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteUsageTriggerPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsageTriggerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUsageTriggerPathParams = field(default=None)
    security: DeleteUsageTriggerSecurity = field(default=None)
    

@dataclass
class DeleteUsageTriggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
