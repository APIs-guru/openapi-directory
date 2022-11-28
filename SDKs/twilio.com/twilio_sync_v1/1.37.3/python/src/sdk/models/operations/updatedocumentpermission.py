from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateDocumentPermissionPathParams:
    document_sid: str = field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentPermissionUpdateDocumentPermissionRequest:
    manage: bool = field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclass
class UpdateDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocumentPermissionRequest:
    path_params: UpdateDocumentPermissionPathParams = field()
    security: UpdateDocumentPermissionSecurity = field()
    request: Optional[UpdateDocumentPermissionUpdateDocumentPermissionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_document_document_permission: Optional[shared.SyncV1ServiceDocumentDocumentPermission] = field(default=None)
    
