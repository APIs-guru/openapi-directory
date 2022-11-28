from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GroupDetailsPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class GroupDetails200ApplicationJSONActionEnum(str, Enum):
    GROUP_DETAILS = "groupDetails"


@dataclass_json
@dataclass
class GroupDetails200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class GroupDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GroupDetails200ApplicationJSON:
    action: GroupDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GroupDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GroupDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GroupDetailsRequest:
    path_params: GroupDetailsPathParams = field()
    

@dataclass
class GroupDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    group_details_200_application_json_object: Optional[GroupDetails200ApplicationJSON] = field(default=None)
    
