from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchHostedNumbersHostedNumberOrderPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchHostedNumbersHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchHostedNumbersHostedNumberOrderPathParams = field(default=None)
    security: FetchHostedNumbersHostedNumberOrderSecurity = field(default=None)
    

@dataclass
class FetchHostedNumbersHostedNumberOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    
