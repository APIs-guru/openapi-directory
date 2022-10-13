from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateHostedNumbersAuthorizationDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateHostedNumbersAuthorizationDocumentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateHostedNumbersAuthorizationDocumentSecurity = field(default=None)
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentResponses:
    preview_hosted_numbers_authorization_document: Optional[shared.PreviewHostedNumbersAuthorizationDocument] = field(default=None)
    

@dataclass
class UpdateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateHostedNumbersAuthorizationDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
