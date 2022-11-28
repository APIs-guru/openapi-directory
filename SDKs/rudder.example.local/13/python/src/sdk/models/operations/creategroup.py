from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateGroup200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP = "createGroup"


@dataclass_json
@dataclass
class CreateGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class CreateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateGroup200ApplicationJSON:
    action: CreateGroup200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateGroup200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateGroup200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateGroupRequest:
    request: Optional[shared.GroupNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_group_200_application_json_object: Optional[CreateGroup200ApplicationJSON] = field(default=None)
    
