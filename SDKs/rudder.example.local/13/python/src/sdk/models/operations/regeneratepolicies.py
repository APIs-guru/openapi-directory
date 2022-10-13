from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RegeneratePolicies200ApplicationJSONActionEnum(str, Enum):
    REGENERATE_POLICIES = "regeneratePolicies"

class RegeneratePolicies200ApplicationJSONDataPoliciesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class RegeneratePolicies200ApplicationJSONData:
    policies: RegeneratePolicies200ApplicationJSONDataPoliciesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
class RegeneratePolicies200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RegeneratePolicies200ApplicationJSON:
    action: RegeneratePolicies200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: RegeneratePolicies200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: RegeneratePolicies200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class RegeneratePoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    regenerate_policies_200_application_json_object: Optional[RegeneratePolicies200ApplicationJSON] = field(default=None)
    
