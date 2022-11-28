from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class ListCommandQueryParams:
    direction: Optional[shared.CommandEnumDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    status: Optional[shared.CommandEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    transport: Optional[shared.CommandEnumTransportEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Transport', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListCommandListCommandResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListCommandListCommandResponse:
    commands: Optional[List[shared.WirelessV1Command]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    meta: Optional[ListCommandListCommandResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListCommandRequest:
    query_params: ListCommandQueryParams = field()
    security: ListCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListCommandResponse:
    content_type: str = field()
    status_code: int = field()
    list_command_response: Optional[ListCommandListCommandResponse] = field(default=None)
    
