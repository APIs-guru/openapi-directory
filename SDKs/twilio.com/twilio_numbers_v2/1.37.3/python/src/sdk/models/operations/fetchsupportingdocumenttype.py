from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SUPPORTING_DOCUMENT_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchSupportingDocumentTypePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSupportingDocumentTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSupportingDocumentTypeRequest:
    path_params: FetchSupportingDocumentTypePathParams = field()
    security: FetchSupportingDocumentTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSupportingDocumentTypeResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_supporting_document_type: Optional[shared.NumbersV2RegulatoryComplianceSupportingDocumentType] = field(default=None)
    
