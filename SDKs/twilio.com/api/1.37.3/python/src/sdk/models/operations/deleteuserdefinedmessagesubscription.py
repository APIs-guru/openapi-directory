from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteUserDefinedMessageSubscriptionPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserDefinedMessageSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserDefinedMessageSubscriptionRequest:
    path_params: DeleteUserDefinedMessageSubscriptionPathParams = field()
    security: DeleteUserDefinedMessageSubscriptionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUserDefinedMessageSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    
