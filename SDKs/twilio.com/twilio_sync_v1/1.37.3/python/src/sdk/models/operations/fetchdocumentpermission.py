from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchDocumentPermissionPathParams:
    document_sid: str = field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDocumentPermissionRequest:
    path_params: FetchDocumentPermissionPathParams = field()
    security: FetchDocumentPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_document_document_permission: Optional[shared.SyncV1ServiceDocumentDocumentPermission] = field(default=None)
    
