from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class ListBundleCopyPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBundleCopyQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBundleCopySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBundleCopyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListBundleCopyPathParams = field(default=None)
    query_params: ListBundleCopyQueryParams = field(default=None)
    security: ListBundleCopySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBundleCopy200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBundleCopy200ApplicationJSONListBundleCopyResponse:
    meta: Optional[ListBundleCopy200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.NumbersV2RegulatoryComplianceBundleBundleCopy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListBundleCopyResponses:
    list_bundle_copy_response: Optional[ListBundleCopy200ApplicationJSONListBundleCopyResponse] = field(default=None)
    

@dataclass
class ListBundleCopyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListBundleCopyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
