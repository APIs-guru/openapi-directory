from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteRuleCategoryPathParams:
    rule_category_id: str = field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class DeleteRuleCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE_CATEGORY = "DeleteRuleCategory"


@dataclass_json
@dataclass
class DeleteRuleCategory200ApplicationJSONData:
    group_categories: List[shared.RuleCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCategories') }})
    
class DeleteRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteRuleCategory200ApplicationJSON:
    action: DeleteRuleCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteRuleCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteRuleCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteRuleCategoryRequest:
    path_params: DeleteRuleCategoryPathParams = field()
    

@dataclass
class DeleteRuleCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    delete_rule_category_200_application_json_object: Optional[DeleteRuleCategory200ApplicationJSON] = field(default=None)
    
