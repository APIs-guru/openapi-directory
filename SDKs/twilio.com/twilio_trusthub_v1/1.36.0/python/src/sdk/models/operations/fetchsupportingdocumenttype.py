from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchSupportingDocumentTypePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSupportingDocumentTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSupportingDocumentTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSupportingDocumentTypePathParams = field(default=None)
    security: FetchSupportingDocumentTypeSecurity = field(default=None)
    

@dataclass
class FetchSupportingDocumentTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_supporting_document_type: Optional[shared.TrusthubV1SupportingDocumentType] = field(default=None)
    
