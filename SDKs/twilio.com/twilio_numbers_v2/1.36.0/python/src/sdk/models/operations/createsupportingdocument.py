from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateSupportingDocumentCreateSupportingDocumentRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    type: str = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSupportingDocumentCreateSupportingDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSupportingDocumentSecurity = field(default=None)
    

@dataclass
class CreateSupportingDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_supporting_document: Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument] = field(default=None)
    
