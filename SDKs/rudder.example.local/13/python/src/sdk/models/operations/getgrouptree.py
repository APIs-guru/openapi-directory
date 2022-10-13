from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class GetGroupTree200ApplicationJSONActionEnum(str, Enum):
    GET_GROUP_TREE = "GetGroupTree"


@dataclass_json
@dataclass
class GetGroupTree200ApplicationJSONData:
    group_categories: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class GetGroupTree200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetGroupTree200ApplicationJSON:
    action: GetGroupTree200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetGroupTree200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetGroupTree200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetGroupTreeResponse:
    content_type: str = field(default=None)
    get_group_tree_200_application_json_object: Optional[GetGroupTree200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
