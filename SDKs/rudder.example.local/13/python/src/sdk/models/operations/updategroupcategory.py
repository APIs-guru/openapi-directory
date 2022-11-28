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
class UpdateGroupCategoryPathParams:
    group_category_id: str = field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class UpdateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP_CATEGORY = "UpdateGroupCategory"


@dataclass_json
@dataclass
class UpdateGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class UpdateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateGroupCategory200ApplicationJSON:
    action: UpdateGroupCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateGroupCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateGroupCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateGroupCategoryRequest:
    path_params: UpdateGroupCategoryPathParams = field()
    request: shared.GroupCategoryUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGroupCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    update_group_category_200_application_json_object: Optional[UpdateGroupCategory200ApplicationJSON] = field(default=None)
    
