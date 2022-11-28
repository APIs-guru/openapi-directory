from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncDocumentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncDocumentCreateSyncDocumentRequest:
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncDocumentRequest:
    path_params: CreateSyncDocumentPathParams = field()
    security: CreateSyncDocumentSecurity = field()
    request: Optional[CreateSyncDocumentCreateSyncDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_document: Optional[shared.PreviewSyncServiceDocument] = field(default=None)
    
