from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RuleDetailsPathParams:
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RuleDetailsRequest:
    path_params: RuleDetailsPathParams = field(default=None)
    
class RuleDetails200ApplicationJSONActionEnum(str, Enum):
    RULE_DETAILS = "ruleDetails"


@dataclass_json
@dataclass
class RuleDetails200ApplicationJSONData:
    rules: List[shared.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class RuleDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RuleDetails200ApplicationJSON:
    action: RuleDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: RuleDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: RuleDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class RuleDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    rule_details_200_application_json_object: Optional[RuleDetails200ApplicationJSON] = field(default=None)
    
