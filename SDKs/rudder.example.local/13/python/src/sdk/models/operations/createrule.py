from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateRuleRequest:
    request: Optional[shared.RuleNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateRule200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE = "createRule"


@dataclass_json
@dataclass
class CreateRule200ApplicationJSONData:
    rules: List[shared.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class CreateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateRule200ApplicationJSON:
    action: CreateRule200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateRule200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateRule200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_rule_200_application_json_object: Optional[CreateRule200ApplicationJSON] = field(default=None)
    
