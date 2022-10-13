from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
CREATE_PAYMENTS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreatePaymentsPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePaymentsRequestBodyCreatePaymentsRequest:
    bank_account_type: Optional[shared.PaymentsEnumBankAccountTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'BankAccountType' }})
    charge_amount: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'ChargeAmount' }})
    currency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Currency' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    idempotency_key: str = field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    input: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Input' }})
    min_postal_code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MinPostalCodeLength' }})
    parameter: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Parameter' }})
    payment_connector: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PaymentConnector' }})
    payment_method: Optional[shared.PaymentsEnumPaymentMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'PaymentMethod' }})
    postal_code: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'PostalCode' }})
    security_code: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SecurityCode' }})
    status_callback: str = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    token_type: Optional[shared.PaymentsEnumTokenTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'TokenType' }})
    valid_card_types: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ValidCardTypes' }})
    

@dataclass
class CreatePaymentsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePaymentsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreatePaymentsPathParams = field(default=None)
    request: Optional[CreatePaymentsRequestBodyCreatePaymentsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePaymentsSecurity = field(default=None)
    

@dataclass
class CreatePaymentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_payments: Optional[shared.APIV2010AccountCallPayments] = field(default=None)
    
