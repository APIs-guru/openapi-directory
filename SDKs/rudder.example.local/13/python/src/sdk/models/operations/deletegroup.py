from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class DeleteGroup200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP = "deleteGroup"


@dataclass_json
@dataclass
class DeleteGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class DeleteGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteGroup200ApplicationJSON:
    action: DeleteGroup200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteGroup200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteGroup200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = field()
    

@dataclass
class DeleteGroupResponse:
    content_type: str = field()
    status_code: int = field()
    delete_group_200_application_json_object: Optional[DeleteGroup200ApplicationJSON] = field(default=None)
    
