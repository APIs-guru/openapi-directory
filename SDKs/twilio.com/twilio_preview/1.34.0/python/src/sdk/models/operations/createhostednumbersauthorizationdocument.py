from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHostedNumbersAuthorizationDocumentSecurity = field(default=None)
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentResponses:
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    

@dataclass
class CreateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateHostedNumbersAuthorizationDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
