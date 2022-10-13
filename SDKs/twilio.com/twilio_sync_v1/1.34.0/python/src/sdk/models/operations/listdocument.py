from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListDocumentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDocumentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDocumentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDocumentPathParams = field(default=None)
    query_params: ListDocumentQueryParams = field(default=None)
    security: ListDocumentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDocument200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDocument200ApplicationJSONListDocumentResponse:
    documents: Optional[List[shared.SyncV1ServiceDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    meta: Optional[ListDocument200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDocumentResponses:
    list_document_response: Optional[ListDocument200ApplicationJSONListDocumentResponse] = field(default=None)
    

@dataclass
class ListDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
