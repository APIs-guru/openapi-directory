from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class UpdateGroup200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP = "updateGroup"


@dataclass_json
@dataclass
class UpdateGroup200ApplicationJSONData:
    groups: List[shared.Group] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class UpdateGroup200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateGroup200ApplicationJSON:
    action: UpdateGroup200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateGroup200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateGroup200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateGroupRequest:
    path_params: UpdateGroupPathParams = field()
    request: shared.GroupUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    update_group_200_application_json_object: Optional[UpdateGroup200ApplicationJSON] = field(default=None)
    
