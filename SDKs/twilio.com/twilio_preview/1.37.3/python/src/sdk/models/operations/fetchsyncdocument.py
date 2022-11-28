from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncDocumentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncDocumentRequest:
    path_params: FetchSyncDocumentPathParams = field()
    security: FetchSyncDocumentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_document: Optional[shared.PreviewSyncServiceDocument] = field(default=None)
    
