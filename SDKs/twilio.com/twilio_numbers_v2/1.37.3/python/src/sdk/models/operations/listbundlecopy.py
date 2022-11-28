from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class ListBundleCopyPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBundleCopyQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBundleCopySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBundleCopyListBundleCopyResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBundleCopyListBundleCopyResponse:
    meta: Optional[ListBundleCopyListBundleCopyResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.NumbersV2RegulatoryComplianceBundleBundleCopy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListBundleCopyRequest:
    path_params: ListBundleCopyPathParams = field()
    query_params: ListBundleCopyQueryParams = field()
    security: ListBundleCopySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBundleCopyResponse:
    content_type: str = field()
    status_code: int = field()
    list_bundle_copy_response: Optional[ListBundleCopyListBundleCopyResponse] = field(default=None)
    
