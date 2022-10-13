from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncDocumentHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateSyncDocumentRequestBodyUpdateSyncDocumentRequest:
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class UpdateSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncDocumentPathParams = field(default=None)
    headers: UpdateSyncDocumentHeaders = field(default=None)
    request: Optional[UpdateSyncDocumentRequestBodyUpdateSyncDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncDocumentSecurity = field(default=None)
    

@dataclass
class UpdateSyncDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_document: Optional[shared.PreviewSyncServiceDocument] = field(default=None)
    
