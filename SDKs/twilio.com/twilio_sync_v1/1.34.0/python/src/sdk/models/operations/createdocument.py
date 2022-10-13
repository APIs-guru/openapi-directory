from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDocumentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDocumentSecurity = field(default=None)
    

@dataclass
class CreateDocumentResponses:
    sync_v1_service_document: Optional[shared.SyncV1ServiceDocument] = field(default=None)
    

@dataclass
class CreateDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
