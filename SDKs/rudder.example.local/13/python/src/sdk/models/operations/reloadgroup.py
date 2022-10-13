from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReloadGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReloadGroupRequest:
    path_params: ReloadGroupPathParams = field(default=None)
    
class ReloadGroup200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUP = "reloadGroup"


@dataclass_json
@dataclass
class ReloadGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class ReloadGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadGroup200ApplicationJSON:
    action: ReloadGroup200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadGroup200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadGroup200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_group_200_application_json_object: Optional[ReloadGroup200ApplicationJSON] = field(default=None)
    
