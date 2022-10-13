from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncDocumentPermissionPathParams = field(default=None)
    security: FetchSyncDocumentPermissionSecurity = field(default=None)
    

@dataclass
class FetchSyncDocumentPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_document_document_permission: Optional[shared.PreviewSyncServiceDocumentDocumentPermission] = field(default=None)
    
