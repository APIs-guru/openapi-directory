from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpdatePolicies200ApplicationJSONActionEnum(str, Enum):
    UPDATE_POLICIES = "updatePolicies"

class UpdatePolicies200ApplicationJSONDataPoliciesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class UpdatePolicies200ApplicationJSONData:
    policies: UpdatePolicies200ApplicationJSONDataPoliciesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
class UpdatePolicies200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdatePolicies200ApplicationJSON:
    action: UpdatePolicies200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdatePolicies200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdatePolicies200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdatePoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_policies_200_application_json_object: Optional[UpdatePolicies200ApplicationJSON] = field(default=None)
    
