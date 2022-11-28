from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP_CATEGORY = "CreateGroupCategory"


@dataclass_json
@dataclass
class CreateGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class CreateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateGroupCategory200ApplicationJSON:
    action: CreateGroupCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateGroupCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateGroupCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateGroupCategoryRequest:
    request: shared.GroupCategory = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    create_group_category_200_application_json_object: Optional[CreateGroupCategory200ApplicationJSON] = field(default=None)
    
