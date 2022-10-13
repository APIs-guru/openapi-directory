from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGroupRequest:
    request: Optional[shared.GroupNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateGroup200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP = "createGroup"


@dataclass_json
@dataclass
class CreateGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class CreateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateGroup200ApplicationJSON:
    action: CreateGroup200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateGroup200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateGroup200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_200_application_json_object: Optional[CreateGroup200ApplicationJSON] = field(default=None)
    
