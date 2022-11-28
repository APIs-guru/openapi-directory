from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteHostedNumbersHostedNumberOrderPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderRequest:
    path_params: DeleteHostedNumbersHostedNumberOrderPathParams = field()
    security: DeleteHostedNumbersHostedNumberOrderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteHostedNumbersHostedNumberOrderResponse:
    content_type: str = field()
    status_code: int = field()
    
