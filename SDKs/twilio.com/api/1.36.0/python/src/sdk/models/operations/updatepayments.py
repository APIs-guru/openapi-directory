from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdatePaymentsPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentsUpdatePaymentsRequest:
    capture: Optional[shared.PaymentsEnumCaptureEnum] = field(default=None, metadata={'form': { 'field_name': 'Capture' }})
    idempotency_key: str = field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    status: Optional[shared.PaymentsEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: str = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class UpdatePaymentsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePaymentsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdatePaymentsPathParams = field(default=None)
    request: Optional[UpdatePaymentsUpdatePaymentsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePaymentsSecurity = field(default=None)
    

@dataclass
class UpdatePaymentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_payments: Optional[shared.APIV2010AccountCallPayments] = field(default=None)
    
