from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class GetRuleTree200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_TREE = "GetRuleTree"


@dataclass_json
@dataclass
class GetRuleTree200ApplicationJSONData:
    rule_categories: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleCategories' }})
    
class GetRuleTree200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRuleTree200ApplicationJSON:
    action: GetRuleTree200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetRuleTree200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetRuleTree200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetRuleTreeResponse:
    content_type: str = field(default=None)
    get_rule_tree_200_application_json_object: Optional[GetRuleTree200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
