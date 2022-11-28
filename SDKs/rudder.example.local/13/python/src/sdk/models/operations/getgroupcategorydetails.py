from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGroupCategoryDetailsPathParams:
    group_category_id: str = field(metadata={'path_param': { 'field_name': 'groupCategoryId', 'style': 'simple', 'explode': False }})
    
class GetGroupCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_GROUP_CATEGORY_DETAILS = "GetGroupCategoryDetails"


@dataclass_json
@dataclass
class GetGroupCategoryDetails200ApplicationJSONData:
    group_categories: List[shared.GroupCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class GetGroupCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetGroupCategoryDetails200ApplicationJSON:
    action: GetGroupCategoryDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetGroupCategoryDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetGroupCategoryDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetGroupCategoryDetailsRequest:
    path_params: GetGroupCategoryDetailsPathParams = field()
    

@dataclass
class GetGroupCategoryDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    get_group_category_details_200_application_json_object: Optional[GetGroupCategoryDetails200ApplicationJSON] = field(default=None)
    
