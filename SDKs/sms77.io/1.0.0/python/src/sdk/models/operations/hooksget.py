from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HooksGetActionEnum(str, Enum):
    READ = "read"


@dataclass
class HooksGetQueryParams:
    action: HooksGetActionEnum = field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class HooksGet200ApplicationJSONHooks:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_method') }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclass_json
@dataclass
class HooksGet200ApplicationJSON:
    hooks: Optional[List[HooksGet200ApplicationJSONHooks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class HooksGetRequest:
    query_params: HooksGetQueryParams = field()
    

@dataclass
class HooksGetResponse:
    content_type: str = field()
    status_code: int = field()
    hooks_get_200_application_json_object: Optional[HooksGet200ApplicationJSON] = field(default=None)
    
