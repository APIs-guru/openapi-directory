from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE_CATEGORY = "CreateRuleCategory"


@dataclass_json
@dataclass
class CreateRuleCategory200ApplicationJSONData:
    rule_categories: List[shared.RuleCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class CreateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateRuleCategory200ApplicationJSON:
    action: CreateRuleCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateRuleCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateRuleCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateRuleCategoryRequest:
    request: shared.RuleCategory = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRuleCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    create_rule_category_200_application_json_object: Optional[CreateRuleCategory200ApplicationJSON] = field(default=None)
    
