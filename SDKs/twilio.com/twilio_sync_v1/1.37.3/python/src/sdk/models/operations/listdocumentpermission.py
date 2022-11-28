from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListDocumentPermissionPathParams:
    document_sid: str = field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDocumentPermissionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDocumentPermissionListDocumentPermissionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDocumentPermissionListDocumentPermissionResponse:
    meta: Optional[ListDocumentPermissionListDocumentPermissionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    permissions: Optional[List[shared.SyncV1ServiceDocumentDocumentPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass
class ListDocumentPermissionRequest:
    path_params: ListDocumentPermissionPathParams = field()
    query_params: ListDocumentPermissionQueryParams = field()
    security: ListDocumentPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    list_document_permission_response: Optional[ListDocumentPermissionListDocumentPermissionResponse] = field(default=None)
    
