from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_EXPORT_CUSTOM_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class ListExportCustomJobPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListExportCustomJobQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListExportCustomJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListExportCustomJobRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListExportCustomJobPathParams = field(default=None)
    query_params: ListExportCustomJobQueryParams = field(default=None)
    security: ListExportCustomJobSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListExportCustomJob200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListExportCustomJob200ApplicationJSONListExportCustomJobResponse:
    jobs: Optional[List[shared.BulkexportsV1ExportExportCustomJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    meta: Optional[ListExportCustomJob200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListExportCustomJobResponse:
    content_type: str = field(default=None)
    list_export_custom_job_response: Optional[ListExportCustomJob200ApplicationJSONListExportCustomJobResponse] = field(default=None)
    status_code: int = field(default=None)
    
