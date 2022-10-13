from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteRulePathParams:
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRuleRequest:
    path_params: DeleteRulePathParams = field(default=None)
    
class DeleteRule200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE = "deleteRule"


@dataclass_json
@dataclass
class DeleteRule200ApplicationJSONData:
    rules: List[shared.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class DeleteRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteRule200ApplicationJSON:
    action: DeleteRule200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteRule200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteRule200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_rule_200_application_json_object: Optional[DeleteRule200ApplicationJSON] = field(default=None)
    
