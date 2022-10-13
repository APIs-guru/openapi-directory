from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRuleCategoryPathParams:
    rule_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRuleCategoryRequest:
    path_params: UpdateRuleCategoryPathParams = field(default=None)
    request: shared.RuleCategoryUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE_CATEGORY = "UpdateRuleCategory"


@dataclass_json
@dataclass
class UpdateRuleCategory200ApplicationJSONData:
    rule_categories: List[shared.RuleCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleCategories' }})
    
class UpdateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateRuleCategory200ApplicationJSON:
    action: UpdateRuleCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateRuleCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateRuleCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateRuleCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_rule_category_200_application_json_object: Optional[UpdateRuleCategory200ApplicationJSON] = field(default=None)
    
