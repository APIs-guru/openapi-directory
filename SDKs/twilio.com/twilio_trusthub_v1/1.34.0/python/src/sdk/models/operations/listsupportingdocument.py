from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListSupportingDocumentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSupportingDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSupportingDocumentRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSupportingDocumentQueryParams = field(default=None)
    security: ListSupportingDocumentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSupportingDocument200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse:
    meta: Optional[ListSupportingDocument200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1SupportingDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListSupportingDocumentResponses:
    list_supporting_document_response: Optional[ListSupportingDocument200ApplicationJSONListSupportingDocumentResponse] = field(default=None)
    

@dataclass
class ListSupportingDocumentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSupportingDocumentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
