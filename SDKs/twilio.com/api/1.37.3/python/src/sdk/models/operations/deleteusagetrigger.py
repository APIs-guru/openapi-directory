from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteUsageTriggerPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsageTriggerRequest:
    path_params: DeleteUsageTriggerPathParams = field()
    security: DeleteUsageTriggerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUsageTriggerResponse:
    content_type: str = field()
    status_code: int = field()
    
