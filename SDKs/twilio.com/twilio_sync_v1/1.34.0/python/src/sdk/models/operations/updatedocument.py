from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDocumentPathParams = field(default=None)
    headers: UpdateDocumentHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDocumentSecurity = field(default=None)
    

@dataclass
class UpdateDocumentResponses:
    sync_v1_service_document: Optional[shared.SyncV1ServiceDocument] = field(default=None)
    

@dataclass
class UpdateDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
