from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListWirelessCommandQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Device', 'style': 'form', 'explode': True }})
    direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWirelessCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWirelessCommandListWirelessCommandResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWirelessCommandListWirelessCommandResponse:
    commands: Optional[List[shared.PreviewWirelessCommand]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    meta: Optional[ListWirelessCommandListWirelessCommandResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListWirelessCommandRequest:
    query_params: ListWirelessCommandQueryParams = field()
    security: ListWirelessCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWirelessCommandResponse:
    content_type: str = field()
    status_code: int = field()
    list_wireless_command_response: Optional[ListWirelessCommandListWirelessCommandResponse] = field(default=None)
    
