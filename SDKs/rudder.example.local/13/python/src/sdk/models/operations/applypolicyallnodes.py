from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ApplyPolicyAllNodes200ApplicationJSONActionEnum(str, Enum):
    APPLY_POLICY_ALL_NODES = "applyPolicyAllNodes"


@dataclass_json
@dataclass
class ApplyPolicyAllNodes200ApplicationJSONData:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
class ApplyPolicyAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ApplyPolicyAllNodes200ApplicationJSON:
    action: ApplyPolicyAllNodes200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: List[ApplyPolicyAllNodes200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ApplyPolicyAllNodes200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ApplyPolicyAllNodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apply_policy_all_nodes_200_application_json_object: Optional[ApplyPolicyAllNodes200ApplicationJSON] = field(default=None)
    
