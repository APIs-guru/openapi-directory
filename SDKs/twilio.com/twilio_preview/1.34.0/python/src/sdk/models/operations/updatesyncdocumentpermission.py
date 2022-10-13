from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncDocumentPermissionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncDocumentPermissionSecurity = field(default=None)
    

@dataclass
class UpdateSyncDocumentPermissionResponses:
    preview_sync_service_document_document_permission: Optional[shared.PreviewSyncServiceDocumentDocumentPermission] = field(default=None)
    

@dataclass
class UpdateSyncDocumentPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncDocumentPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
