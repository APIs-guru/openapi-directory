from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RuleDetailsPathParams:
    rule_id: str = field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class RuleDetails200ApplicationJSONActionEnum(str, Enum):
    RULE_DETAILS = "ruleDetails"


@dataclass_json
@dataclass
class RuleDetails200ApplicationJSONData:
    rules: List[shared.Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class RuleDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RuleDetails200ApplicationJSON:
    action: RuleDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: RuleDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RuleDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class RuleDetailsRequest:
    path_params: RuleDetailsPathParams = field()
    

@dataclass
class RuleDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    rule_details_200_application_json_object: Optional[RuleDetails200ApplicationJSON] = field(default=None)
    
