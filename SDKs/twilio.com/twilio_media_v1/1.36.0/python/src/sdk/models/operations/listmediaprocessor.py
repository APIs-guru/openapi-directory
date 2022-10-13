from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class ListMediaProcessorQueryParams:
    order: Optional[shared.MediaProcessorEnumOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.MediaProcessorEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMediaProcessorRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListMediaProcessorQueryParams = field(default=None)
    security: ListMediaProcessorSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMediaProcessor200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMediaProcessor200ApplicationJSONListMediaProcessorResponse:
    media_processors: Optional[List[shared.MediaV1MediaProcessor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_processors' }})
    meta: Optional[ListMediaProcessor200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMediaProcessorResponse:
    content_type: str = field(default=None)
    list_media_processor_response: Optional[ListMediaProcessor200ApplicationJSONListMediaProcessorResponse] = field(default=None)
    status_code: int = field(default=None)
    
