from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGroupCategoryPathParams:
    group_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupCategoryRequest:
    path_params: UpdateGroupCategoryPathParams = field(default=None)
    request: shared.GroupCategoryUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateGroupCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_GROUP_CATEGORY = "UpdateGroupCategory"


@dataclass_json
@dataclass
class UpdateGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class UpdateGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateGroupCategory200ApplicationJSON:
    action: UpdateGroupCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateGroupCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateGroupCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateGroupCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_group_category_200_application_json_object: Optional[UpdateGroupCategory200ApplicationJSON] = field(default=None)
    
