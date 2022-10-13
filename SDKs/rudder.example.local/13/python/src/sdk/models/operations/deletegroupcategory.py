from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteGroupCategoryPathParams:
    group_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupCategoryRequest:
    path_params: DeleteGroupCategoryPathParams = field(default=None)
    
class DeleteGroupCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_GROUP_CATEGORY = "DeleteGroupCategory"


@dataclass_json
@dataclass
class DeleteGroupCategory200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class DeleteGroupCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteGroupCategory200ApplicationJSON:
    action: DeleteGroupCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteGroupCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteGroupCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteGroupCategoryResponse:
    content_type: str = field(default=None)
    delete_group_category_200_application_json_object: Optional[DeleteGroupCategory200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
