from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteSupportingDocumentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSupportingDocumentRequest:
    path_params: DeleteSupportingDocumentPathParams = field()
    security: DeleteSupportingDocumentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSupportingDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    
