from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHostedNumbersHostedNumberOrderSecurity = field(default=None)
    

@dataclass
class CreateHostedNumbersHostedNumberOrderResponses:
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    

@dataclass
class CreateHostedNumbersHostedNumberOrderResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateHostedNumbersHostedNumberOrderResponses]] = field(default=None)
    status_code: int = field(default=None)
    
