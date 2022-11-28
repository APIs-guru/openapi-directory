from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteDocumentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocumentRequest:
    path_params: DeleteDocumentPathParams = field()
    security: DeleteDocumentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    
