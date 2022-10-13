from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocumentRequestBodyCreateDocumentRequest:
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDocumentPathParams = field(default=None)
    request: Optional[CreateDocumentRequestBodyCreateDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDocumentSecurity = field(default=None)
    

@dataclass
class CreateDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_document: Optional[shared.SyncV1ServiceDocument] = field(default=None)
    
