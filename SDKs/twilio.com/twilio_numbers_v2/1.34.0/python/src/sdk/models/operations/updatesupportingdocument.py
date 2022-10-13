from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class UpdateSupportingDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSupportingDocumentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSupportingDocumentSecurity = field(default=None)
    

@dataclass
class UpdateSupportingDocumentResponses:
    numbers_v2_regulatory_compliance_supporting_document: Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument] = field(default=None)
    

@dataclass
class UpdateSupportingDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSupportingDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
