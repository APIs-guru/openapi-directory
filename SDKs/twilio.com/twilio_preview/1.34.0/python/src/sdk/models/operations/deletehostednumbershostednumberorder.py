from dataclasses import dataclass, field
from typing import Optional
DELETE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteHostedNumbersHostedNumberOrderPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteHostedNumbersHostedNumberOrderPathParams = field(default=None)
    security: DeleteHostedNumbersHostedNumberOrderSecurity = field(default=None)
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
