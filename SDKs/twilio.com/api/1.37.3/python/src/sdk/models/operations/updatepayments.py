from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdatePaymentsPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentsUpdatePaymentsRequest:
    idempotency_key: str = field(metadata={'form': { 'field_name': 'IdempotencyKey' }})
    status_callback: str = field(metadata={'form': { 'field_name': 'StatusCallback' }})
    capture: Optional[shared.PaymentsEnumCaptureEnum] = field(default=None, metadata={'form': { 'field_name': 'Capture' }})
    status: Optional[shared.PaymentsEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdatePaymentsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePaymentsRequest:
    path_params: UpdatePaymentsPathParams = field()
    security: UpdatePaymentsSecurity = field()
    request: Optional[UpdatePaymentsUpdatePaymentsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdatePaymentsResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_payments: Optional[shared.APIV2010AccountCallPayments] = field(default=None)
    
