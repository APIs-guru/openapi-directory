from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteRuleCategoryPathParams:
    rule_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRuleCategoryRequest:
    path_params: DeleteRuleCategoryPathParams = field(default=None)
    
class DeleteRuleCategory200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE_CATEGORY = "DeleteRuleCategory"


@dataclass_json
@dataclass
class DeleteRuleCategory200ApplicationJSONData:
    group_categories: List[shared.RuleCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCategories' }})
    
class DeleteRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteRuleCategory200ApplicationJSON:
    action: DeleteRuleCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteRuleCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteRuleCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteRuleCategoryResponse:
    content_type: str = field(default=None)
    delete_rule_category_200_application_json_object: Optional[DeleteRuleCategory200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
