from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateHostedNumbersHostedNumberOrderPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateHostedNumbersHostedNumberOrderPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateHostedNumbersHostedNumberOrderSecurity = field(default=None)
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderResponses:
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateHostedNumbersHostedNumberOrderResponses]] = field(default=None)
    status_code: int = field(default=None)
    
