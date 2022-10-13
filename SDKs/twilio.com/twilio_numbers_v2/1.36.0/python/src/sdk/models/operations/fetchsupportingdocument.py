from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchSupportingDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSupportingDocumentPathParams = field(default=None)
    security: FetchSupportingDocumentSecurity = field(default=None)
    

@dataclass
class FetchSupportingDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_supporting_document: Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument] = field(default=None)
    
