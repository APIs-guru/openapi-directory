from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SUPPORTING_DOCUMENT_TYPE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListSupportingDocumentTypeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSupportingDocumentTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSupportingDocumentTypeRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSupportingDocumentTypeQueryParams = field(default=None)
    security: ListSupportingDocumentTypeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSupportingDocumentTypeListSupportingDocumentTypeResponse:
    meta: Optional[ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    supporting_document_types: Optional[List[shared.TrusthubV1SupportingDocumentType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supporting_document_types' }})
    

@dataclass
class ListSupportingDocumentTypeResponse:
    content_type: str = field(default=None)
    list_supporting_document_type_response: Optional[ListSupportingDocumentTypeListSupportingDocumentTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
