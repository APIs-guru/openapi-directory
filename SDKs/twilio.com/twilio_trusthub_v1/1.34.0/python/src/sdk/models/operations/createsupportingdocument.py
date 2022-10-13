from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSupportingDocumentSecurity = field(default=None)
    

@dataclass
class CreateSupportingDocumentResponses:
    trusthub_v1_supporting_document: Optional[shared.TrusthubV1SupportingDocument] = field(default=None)
    

@dataclass
class CreateSupportingDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSupportingDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
