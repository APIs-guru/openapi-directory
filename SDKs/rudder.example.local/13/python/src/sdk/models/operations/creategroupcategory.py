from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGroupCategoryRequest:
    request: shared.GroupCategory = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_GROUP_CATEGORY = "CreateGroupCategory"


@dataclass_json
@dataclass
class CreateGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class CreateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateGroupCategory200ApplicationJSON:
    action: CreateGroupCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateGroupCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateGroupCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateGroupCategoryResponse:
    content_type: str = field(default=None)
    create_group_category_200_application_json_object: Optional[CreateGroupCategory200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
