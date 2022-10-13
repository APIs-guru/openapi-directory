from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListSmsCommandQueryParams:
    direction: Optional[shared.SmsCommandEnumDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    status: Optional[shared.SmsCommandEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSmsCommandRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSmsCommandQueryParams = field(default=None)
    security: ListSmsCommandSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSmsCommand200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSmsCommand200ApplicationJSONListSmsCommandResponse:
    meta: Optional[ListSmsCommand200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    sms_commands: Optional[List[shared.SupersimV1SmsCommand]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_commands' }})
    

@dataclass
class ListSmsCommandResponses:
    list_sms_command_response: Optional[ListSmsCommand200ApplicationJSONListSmsCommandResponse] = field(default=None)
    

@dataclass
class ListSmsCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSmsCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
