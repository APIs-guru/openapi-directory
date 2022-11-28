from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncDocumentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncDocumentHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncDocumentUpdateSyncDocumentRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class UpdateSyncDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncDocumentRequest:
    headers: UpdateSyncDocumentHeaders = field()
    path_params: UpdateSyncDocumentPathParams = field()
    security: UpdateSyncDocumentSecurity = field()
    request: Optional[UpdateSyncDocumentUpdateSyncDocumentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_document: Optional[shared.PreviewSyncServiceDocument] = field(default=None)
    
