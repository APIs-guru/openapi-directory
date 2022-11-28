from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateHostedNumbersAuthorizationDocumentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest:
    address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    contact_phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContactPhoneNumber' }})
    contact_title: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContactTitle' }})
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    hosted_number_order_sids: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'HostedNumberOrderSids' }})
    status: Optional[shared.AuthorizationDocumentEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentRequest:
    path_params: UpdateHostedNumbersAuthorizationDocumentPathParams = field()
    security: UpdateHostedNumbersAuthorizationDocumentSecurity = field()
    request: Optional[UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    
