from dataclasses import dataclass, field
from typing import Optional
DELETE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class DeleteSubscriptionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSubscriptionPathParams = field(default=None)
    security: DeleteSubscriptionSecurity = field(default=None)
    

@dataclass
class DeleteSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
