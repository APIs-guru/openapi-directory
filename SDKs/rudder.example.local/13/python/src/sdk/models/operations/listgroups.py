from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListGroups200ApplicationJSONActionEnum(str, Enum):
    LIST_GROUPS = "listGroups"


@dataclass_json
@dataclass
class ListGroups200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class ListGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListGroups200ApplicationJSON:
    action: ListGroups200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListGroups200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListGroups200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_groups_200_application_json_object: Optional[ListGroups200ApplicationJSON] = field(default=None)
    
