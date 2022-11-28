from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetRuleCategoryDetailsPathParams:
    rule_category_id: str = field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class GetRuleCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_CATEGORY_DETAILS = "GetRuleCategoryDetails"


@dataclass_json
@dataclass
class GetRuleCategoryDetails200ApplicationJSONData:
    rules_categories: List[shared.RuleCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesCategories') }})
    
class GetRuleCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRuleCategoryDetails200ApplicationJSON:
    action: GetRuleCategoryDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRuleCategoryDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRuleCategoryDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetRuleCategoryDetailsRequest:
    path_params: GetRuleCategoryDetailsPathParams = field()
    

@dataclass
class GetRuleCategoryDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    get_rule_category_details_200_application_json_object: Optional[GetRuleCategoryDetails200ApplicationJSON] = field(default=None)
    
