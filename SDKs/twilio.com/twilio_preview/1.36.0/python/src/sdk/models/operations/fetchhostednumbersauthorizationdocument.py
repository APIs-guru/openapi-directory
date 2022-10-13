from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchHostedNumbersAuthorizationDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchHostedNumbersAuthorizationDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchHostedNumbersAuthorizationDocumentPathParams = field(default=None)
    security: FetchHostedNumbersAuthorizationDocumentSecurity = field(default=None)
    

@dataclass
class FetchHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    
