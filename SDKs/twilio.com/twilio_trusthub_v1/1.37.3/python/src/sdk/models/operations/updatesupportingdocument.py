from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateSupportingDocumentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSupportingDocumentUpdateSupportingDocumentRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSupportingDocumentRequest:
    path_params: UpdateSupportingDocumentPathParams = field()
    security: UpdateSupportingDocumentSecurity = field()
    request: Optional[UpdateSupportingDocumentUpdateSupportingDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSupportingDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_supporting_document: Optional[shared.TrusthubV1SupportingDocument] = field(default=None)
    
