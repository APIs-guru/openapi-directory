from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRulePathParams:
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRuleRequest:
    path_params: UpdateRulePathParams = field(default=None)
    request: shared.RuleWithCategory = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateRule200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE = "updateRule"


@dataclass_json
@dataclass
class UpdateRule200ApplicationJSONData:
    rules: List[shared.RuleWithCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class UpdateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateRule200ApplicationJSON:
    action: UpdateRule200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateRule200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateRule200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_rule_200_application_json_object: Optional[UpdateRule200ApplicationJSON] = field(default=None)
    
