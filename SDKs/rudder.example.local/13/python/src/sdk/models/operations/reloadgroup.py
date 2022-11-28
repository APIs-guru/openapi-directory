from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReloadGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class ReloadGroup200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUP = "reloadGroup"


@dataclass_json
@dataclass
class ReloadGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ReloadGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadGroup200ApplicationJSON:
    action: ReloadGroup200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadGroup200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadGroup200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadGroupRequest:
    path_params: ReloadGroupPathParams = field()
    

@dataclass
class ReloadGroupResponse:
    content_type: str = field()
    status_code: int = field()
    reload_group_200_application_json_object: Optional[ReloadGroup200ApplicationJSON] = field(default=None)
    
