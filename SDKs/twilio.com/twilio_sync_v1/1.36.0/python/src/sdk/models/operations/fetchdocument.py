from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDocumentPathParams = field(default=None)
    security: FetchDocumentSecurity = field(default=None)
    

@dataclass
class FetchDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_document: Optional[shared.SyncV1ServiceDocument] = field(default=None)
    
