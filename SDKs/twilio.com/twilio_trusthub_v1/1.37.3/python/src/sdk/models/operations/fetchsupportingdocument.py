from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchSupportingDocumentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSupportingDocumentRequest:
    path_params: FetchSupportingDocumentPathParams = field()
    security: FetchSupportingDocumentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSupportingDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_supporting_document: Optional[shared.TrusthubV1SupportingDocument] = field(default=None)
    
