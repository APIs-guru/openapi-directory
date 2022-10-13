from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreatePaymentsPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePaymentsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePaymentsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreatePaymentsPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePaymentsSecurity = field(default=None)
    

@dataclass
class CreatePaymentsResponses:
    api_v2010_account_call_payments: Optional[shared.APIV2010AccountCallPayments] = field(default=None)
    

@dataclass
class CreatePaymentsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreatePaymentsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
