from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteGroupCategoryPathParams:
    group_category_id: str = field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class DeleteGroupCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP_CATEGORY = "DeleteGroupCategory"


@dataclass_json
@dataclass
class DeleteGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class DeleteGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteGroupCategory200ApplicationJSON:
    action: DeleteGroupCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteGroupCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteGroupCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteGroupCategoryRequest:
    path_params: DeleteGroupCategoryPathParams = field()
    

@dataclass
class DeleteGroupCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    delete_group_category_200_application_json_object: Optional[DeleteGroupCategory200ApplicationJSON] = field(default=None)
    
