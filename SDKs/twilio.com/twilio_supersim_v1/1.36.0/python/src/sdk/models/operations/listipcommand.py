from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListIPCommandQueryParams:
    direction: Optional[shared.IPCommandEnumDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    sim_iccid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SimIccid', 'style': 'form', 'explode': True }})
    status: Optional[shared.IPCommandEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIPCommandRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListIPCommandQueryParams = field(default=None)
    security: ListIPCommandSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIPCommand200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListIPCommand200ApplicationJSONListIPCommandResponse:
    ip_commands: Optional[List[shared.SupersimV1IPCommand]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_commands' }})
    meta: Optional[ListIPCommand200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListIPCommandResponse:
    content_type: str = field(default=None)
    list_ip_command_response: Optional[ListIPCommand200ApplicationJSONListIPCommandResponse] = field(default=None)
    status_code: int = field(default=None)
    
