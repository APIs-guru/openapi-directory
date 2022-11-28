from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSmsCommandListSmsCommandResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSmsCommandListSmsCommandResponse:
    meta: Optional[ListSmsCommandListSmsCommandResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sms_commands: Optional[List[shared.SupersimV1SmsCommand]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_commands') }})
    

@dataclass
class ListSmsCommandRequest:
    query_params: ListSmsCommandQueryParams = field()
    security: ListSmsCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSmsCommandResponse:
    content_type: str = field()
    status_code: int = field()
    list_sms_command_response: Optional[ListSmsCommandListSmsCommandResponse] = field(default=None)
    
