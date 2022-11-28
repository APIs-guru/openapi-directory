from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListSourceIPMappingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSourceIPMappingListSourceIPMappingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSourceIPMappingListSourceIPMappingResponse:
    meta: Optional[ListSourceIPMappingListSourceIPMappingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    source_ip_mappings: Optional[List[shared.VoiceV1SourceIPMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip_mappings') }})
    

@dataclass
class ListSourceIPMappingRequest:
    query_params: ListSourceIPMappingQueryParams = field()
    security: ListSourceIPMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSourceIPMappingResponse:
    content_type: str = field()
    status_code: int = field()
    list_source_ip_mapping_response: Optional[ListSourceIPMappingListSourceIPMappingResponse] = field(default=None)
    
