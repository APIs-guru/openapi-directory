from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetGroupCategoryDetailsPathParams:
    group_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupCategoryDetailsRequest:
    path_params: GetGroupCategoryDetailsPathParams = field(default=None)
    
class GetGroupCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_GROUP_CATEGORY_DETAILS = "GetGroupCategoryDetails"


@dataclass_json
@dataclass
class GetGroupCategoryDetails200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class GetGroupCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetGroupCategoryDetails200ApplicationJSON:
    action: GetGroupCategoryDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetGroupCategoryDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetGroupCategoryDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetGroupCategoryDetailsResponse:
    content_type: str = field(default=None)
    get_group_category_details_200_application_json_object: Optional[GetGroupCategoryDetails200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
