from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_END_USER_TYPE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListEndUserTypeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEndUserTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEndUserTypeRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListEndUserTypeQueryParams = field(default=None)
    security: ListEndUserTypeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListEndUserType200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListEndUserType200ApplicationJSONListEndUserTypeResponse:
    end_user_types: Optional[List[shared.TrusthubV1EndUserType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_user_types' }})
    meta: Optional[ListEndUserType200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListEndUserTypeResponses:
    list_end_user_type_response: Optional[ListEndUserType200ApplicationJSONListEndUserTypeResponse] = field(default=None)
    

@dataclass
class ListEndUserTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListEndUserTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
