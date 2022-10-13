from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupRequest:
    path_params: UpdateGroupPathParams = field(default=None)
    request: shared.GroupUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateGroup200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP = "updateGroup"


@dataclass_json
@dataclass
class UpdateGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class UpdateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateGroup200ApplicationJSON:
    action: UpdateGroup200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateGroup200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateGroup200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_group_200_application_json_object: Optional[UpdateGroup200ApplicationJSON] = field(default=None)
    
