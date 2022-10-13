from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GroupDetailsPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupDetailsRequest:
    path_params: GroupDetailsPathParams = field(default=None)
    
class GroupDetails200ApplicationJSONActionEnum(str, Enum):
    GROUP_DETAILS = "groupDetails"


@dataclass_json
@dataclass
class GroupDetails200ApplicationJSONData:
    groups: List[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class GroupDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GroupDetails200ApplicationJSON:
    action: GroupDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GroupDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GroupDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GroupDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    group_details_200_application_json_object: Optional[GroupDetails200ApplicationJSON] = field(default=None)
    
