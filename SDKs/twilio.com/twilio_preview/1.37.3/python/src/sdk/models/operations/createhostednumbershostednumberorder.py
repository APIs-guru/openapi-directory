from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest:
    phone_number: str = field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    sms_capability: bool = field(metadata={'form': { 'field_name': 'SmsCapability' }})
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback_method: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    verification_document_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VerificationDocumentSid' }})
    verification_type: Optional[shared.HostedNumberOrderEnumVerificationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'VerificationType' }})
    

@dataclass
class CreateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersHostedNumberOrderRequest:
    security: CreateHostedNumbersHostedNumberOrderSecurity = field()
    request: Optional[CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateHostedNumbersHostedNumberOrderResponse:
    content_type: str = field()
    status_code: int = field()
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    
