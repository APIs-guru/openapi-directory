from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateSupportingDocumentCreateSupportingDocumentRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    type: str = field(metadata={'form': { 'field_name': 'Type' }})
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclass
class CreateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSupportingDocumentRequest:
    security: CreateSupportingDocumentSecurity = field()
    request: Optional[CreateSupportingDocumentCreateSupportingDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSupportingDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_supporting_document: Optional[shared.NumbersV2RegulatoryComplianceSupportingDocument] = field(default=None)
    
