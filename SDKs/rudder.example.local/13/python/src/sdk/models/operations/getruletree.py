from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetRuleTree200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_TREE = "GetRuleTree"


@dataclass_json
@dataclass
class GetRuleTree200ApplicationJSONData:
    rule_categories: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class GetRuleTree200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRuleTree200ApplicationJSON:
    action: GetRuleTree200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRuleTree200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRuleTree200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetRuleTreeResponse:
    content_type: str = field()
    status_code: int = field()
    get_rule_tree_200_application_json_object: Optional[GetRuleTree200ApplicationJSON] = field(default=None)
    
