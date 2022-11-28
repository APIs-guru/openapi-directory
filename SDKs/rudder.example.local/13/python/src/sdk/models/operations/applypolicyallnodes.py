from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApplyPolicyAllNodes200ApplicationJSONActionEnum(str, Enum):
    APPLY_POLICY_ALL_NODES = "applyPolicyAllNodes"


@dataclass_json
@dataclass
class ApplyPolicyAllNodes200ApplicationJSONData:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
class ApplyPolicyAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ApplyPolicyAllNodes200ApplicationJSON:
    action: ApplyPolicyAllNodes200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: List[ApplyPolicyAllNodes200ApplicationJSONData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ApplyPolicyAllNodes200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ApplyPolicyAllNodesResponse:
    content_type: str = field()
    status_code: int = field()
    apply_policy_all_nodes_200_application_json_object: Optional[ApplyPolicyAllNodes200ApplicationJSON] = field(default=None)
    
