from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DOCUMENT_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListDocumentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDocumentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDocumentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDocumentListDocumentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDocumentListDocumentResponse:
    documents: Optional[List[shared.SyncV1ServiceDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    meta: Optional[ListDocumentListDocumentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListDocumentRequest:
    path_params: ListDocumentPathParams = field()
    query_params: ListDocumentQueryParams = field()
    security: ListDocumentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    list_document_response: Optional[ListDocumentListDocumentResponse] = field(default=None)
    
