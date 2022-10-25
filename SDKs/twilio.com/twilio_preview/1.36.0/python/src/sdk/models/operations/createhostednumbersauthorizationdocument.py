from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest:
    address_sid: str = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    contact_phone_number: str = field(default=None, metadata={'form': { 'field_name': 'ContactPhoneNumber' }})
    contact_title: str = field(default=None, metadata={'form': { 'field_name': 'ContactTitle' }})
    email: str = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    hosted_number_order_sids: List[str] = field(default=None, metadata={'form': { 'field_name': 'HostedNumberOrderSids' }})
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHostedNumbersAuthorizationDocumentSecurity = field(default=None)
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    
