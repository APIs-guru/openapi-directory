from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDocumentPermissionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDocumentPermissionSecurity = field(default=None)
    

@dataclass
class UpdateDocumentPermissionResponses:
    sync_v1_service_document_document_permission: Optional[shared.SyncV1ServiceDocumentDocumentPermission] = field(default=None)
    

@dataclass
class UpdateDocumentPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateDocumentPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
