from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class DeleteSubscriptionPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSubscriptionRequest:
    path_params: DeleteSubscriptionPathParams = field()
    security: DeleteSubscriptionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    
