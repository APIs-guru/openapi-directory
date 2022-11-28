from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdatePolicies200ApplicationJSONActionEnum(str, Enum):
    UPDATE_POLICIES = "updatePolicies"

class UpdatePolicies200ApplicationJSONDataPoliciesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class UpdatePolicies200ApplicationJSONData:
    policies: UpdatePolicies200ApplicationJSONDataPoliciesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
class UpdatePolicies200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdatePolicies200ApplicationJSON:
    action: UpdatePolicies200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdatePolicies200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdatePolicies200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdatePoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    update_policies_200_application_json_object: Optional[UpdatePolicies200ApplicationJSON] = field(default=None)
    
