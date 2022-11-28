from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


CREATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest:
    address_sid: str = field(metadata={'form': { 'field_name': 'AddressSid' }})
    contact_phone_number: str = field(metadata={'form': { 'field_name': 'ContactPhoneNumber' }})
    contact_title: str = field(metadata={'form': { 'field_name': 'ContactTitle' }})
    email: str = field(metadata={'form': { 'field_name': 'Email' }})
    hosted_number_order_sids: List[str] = field(metadata={'form': { 'field_name': 'HostedNumberOrderSids' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentRequest:
    security: CreateHostedNumbersAuthorizationDocumentSecurity = field()
    request: Optional[CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    
