from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncDocumentRequestBodyCreateSyncDocumentRequest:
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncDocumentPathParams = field(default=None)
    request: Optional[CreateSyncDocumentRequestBodyCreateSyncDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncDocumentSecurity = field(default=None)
    

@dataclass
class CreateSyncDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_document: Optional[shared.PreviewSyncServiceDocument] = field(default=None)
    
