from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateSupportingDocumentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSupportingDocumentRequestBodyUpdateSupportingDocumentRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSupportingDocumentPathParams = field(default=None)
    request: Optional[UpdateSupportingDocumentRequestBodyUpdateSupportingDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSupportingDocumentSecurity = field(default=None)
    

@dataclass
class UpdateSupportingDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_supporting_document: Optional[shared.TrusthubV1SupportingDocument] = field(default=None)
    
