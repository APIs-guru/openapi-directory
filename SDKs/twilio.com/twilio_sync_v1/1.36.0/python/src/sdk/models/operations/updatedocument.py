from dataclasses import dataclass, field
from typing import Any,Optional
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
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentUpdateDocumentRequest:
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDocumentPathParams = field(default=None)
    headers: UpdateDocumentHeaders = field(default=None)
    request: Optional[UpdateDocumentUpdateDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDocumentSecurity = field(default=None)
    

@dataclass
class UpdateDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_document: Optional[shared.SyncV1ServiceDocument] = field(default=None)
    
