from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListEsimProfileQueryParams:
    eid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Eid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SimSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.EsimProfileEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEsimProfileRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListEsimProfileQueryParams = field(default=None)
    security: ListEsimProfileSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListEsimProfile200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListEsimProfile200ApplicationJSONListEsimProfileResponse:
    esim_profiles: Optional[List[shared.SupersimV1EsimProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'esim_profiles' }})
    meta: Optional[ListEsimProfile200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListEsimProfileResponses:
    list_esim_profile_response: Optional[ListEsimProfile200ApplicationJSONListEsimProfileResponse] = field(default=None)
    

@dataclass
class ListEsimProfileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListEsimProfileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
