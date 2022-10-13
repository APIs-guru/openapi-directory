from dataclasses import dataclass, field
from typing import Optional
DELETE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteSupportingDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSupportingDocumentPathParams = field(default=None)
    security: DeleteSupportingDocumentSecurity = field(default=None)
    

@dataclass
class DeleteSupportingDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
