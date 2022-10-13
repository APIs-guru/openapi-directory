from dataclasses import dataclass, field
from typing import Optional
DELETE_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDocumentPermissionPathParams = field(default=None)
    security: DeleteDocumentPermissionSecurity = field(default=None)
    

@dataclass
class DeleteDocumentPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
