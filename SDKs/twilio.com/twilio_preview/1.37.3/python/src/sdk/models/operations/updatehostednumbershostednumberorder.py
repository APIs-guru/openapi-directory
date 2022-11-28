from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateHostedNumbersHostedNumberOrderPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest:
    call_delay: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CallDelay' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    extension: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.HostedNumberOrderEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    verification_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VerificationCode' }})
    verification_document_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VerificationDocumentSid' }})
    verification_type: Optional[shared.HostedNumberOrderEnumVerificationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'VerificationType' }})
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderRequest:
    path_params: UpdateHostedNumbersHostedNumberOrderPathParams = field()
    security: UpdateHostedNumbersHostedNumberOrderSecurity = field()
    request: Optional[UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateHostedNumbersHostedNumberOrderResponse:
    content_type: str = field()
    status_code: int = field()
    preview_hosted_numbers_hosted_number_order: Optional[shared.PreviewHostedNumbersHostedNumberOrder] = field(default=None)
    
