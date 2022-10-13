from dataclasses import dataclass, field
from typing import Optional
DELETE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDocumentPathParams = field(default=None)
    security: DeleteDocumentSecurity = field(default=None)
    

@dataclass
class DeleteDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
