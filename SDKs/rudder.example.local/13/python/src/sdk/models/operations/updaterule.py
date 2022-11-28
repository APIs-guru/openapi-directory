from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRulePathParams:
    rule_id: str = field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class UpdateRule200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE = "updateRule"


@dataclass_json
@dataclass
class UpdateRule200ApplicationJSONData:
    rules: List[shared.RuleWithCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class UpdateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateRule200ApplicationJSON:
    action: UpdateRule200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateRule200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateRule200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateRuleRequest:
    path_params: UpdateRulePathParams = field()
    request: shared.RuleWithCategory = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRuleResponse:
    content_type: str = field()
    status_code: int = field()
    update_rule_200_application_json_object: Optional[UpdateRule200ApplicationJSON] = field(default=None)
    
