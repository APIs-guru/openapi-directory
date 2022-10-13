from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncDocumentPathParams = field(default=None)
    security: DeleteSyncDocumentSecurity = field(default=None)
    

@dataclass
class DeleteSyncDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
