from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncDocumentPermissionPathParams:
    document_sid: str = field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncDocumentPermissionRequest:
    path_params: FetchSyncDocumentPermissionPathParams = field()
    security: FetchSyncDocumentPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_document_document_permission: Optional[shared.PreviewSyncServiceDocumentDocumentPermission] = field(default=None)
    
