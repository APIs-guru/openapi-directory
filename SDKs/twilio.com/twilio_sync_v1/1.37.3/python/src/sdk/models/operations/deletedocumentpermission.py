from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteDocumentPermissionPathParams:
    document_sid: str = field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocumentPermissionRequest:
    path_params: DeleteDocumentPermissionPathParams = field()
    security: DeleteDocumentPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    
