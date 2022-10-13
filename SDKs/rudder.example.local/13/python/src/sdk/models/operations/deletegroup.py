from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = field(default=None)
    
class DeleteGroup200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP = "deleteGroup"


@dataclass_json
@dataclass
class DeleteGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class DeleteGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteGroup200ApplicationJSON:
    action: DeleteGroup200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteGroup200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteGroup200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_group_200_application_json_object: Optional[DeleteGroup200ApplicationJSON] = field(default=None)
    
