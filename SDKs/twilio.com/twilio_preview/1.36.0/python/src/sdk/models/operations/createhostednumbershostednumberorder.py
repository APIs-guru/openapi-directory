from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]

class CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateHostedNumbersHostedNumberOrderRequestBodyCreateHostedNumbersHostedNumberOrderRequest:
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    phone_number: str = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_capability: bool = field(default=None, metadata={'form': { 'field_name': 'SmsCapability' }})
    sms_fallback_method: Optional[CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback_method: Optional[CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    verification_document_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VerificationDocumentSid' }})
    verification_type: Optional[shared.HostedNumberOrderEnumVerificationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'VerificationType' }})
    

@dataclass
class CreateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateHostedNumbersHostedNumberOrderRequestBodyCreateHostedNumbersHostedNumberOrderRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHostedNumbersHostedNumberOrderSecurity = field(default=None)
    

@dataclass
class CreateHostedNumbersHostedNumberOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    
