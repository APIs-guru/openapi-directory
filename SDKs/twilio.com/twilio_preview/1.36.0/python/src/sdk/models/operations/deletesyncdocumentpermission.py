from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncDocumentPermissionPathParams = field(default=None)
    security: DeleteSyncDocumentPermissionSecurity = field(default=None)
    

@dataclass
class DeleteSyncDocumentPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
