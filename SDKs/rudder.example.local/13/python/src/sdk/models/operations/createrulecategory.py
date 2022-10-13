from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateRuleCategoryRequest:
    request: shared.RuleCategory = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE_CATEGORY = "CreateRuleCategory"


@dataclass_json
@dataclass
class CreateRuleCategory200ApplicationJSONData:
    rule_categories: List[shared.RuleCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleCategories' }})
    
class CreateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateRuleCategory200ApplicationJSON:
    action: CreateRuleCategory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateRuleCategory200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateRuleCategory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateRuleCategoryResponse:
    content_type: str = field(default=None)
    create_rule_category_200_application_json_object: Optional[CreateRuleCategory200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
