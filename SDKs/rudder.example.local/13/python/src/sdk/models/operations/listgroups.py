from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListGroups200ApplicationJSONActionEnum(str, Enum):
    LIST_GROUPS = "listGroups"


@dataclass_json
@dataclass
class ListGroups200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ListGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListGroups200ApplicationJSON:
    action: ListGroups200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListGroups200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListGroups200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    list_groups_200_application_json_object: Optional[ListGroups200ApplicationJSON] = field(default=None)
    
