from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChangePendingNodeStatusPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ChangePendingNodeStatusRequestBodyStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    REFUSED = "refused"


@dataclass_json
@dataclass
class ChangePendingNodeStatusRequestBody:
    status: Optional[ChangePendingNodeStatusRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class ChangePendingNodeStatusRequest:
    path_params: ChangePendingNodeStatusPathParams = field(default=None)
    request: Optional[ChangePendingNodeStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class ChangePendingNodeStatus200ApplicationJSONActionEnum(str, Enum):
    CHANGE_PENDING_NODE_STATUS = "changePendingNodeStatus"


@dataclass_json
@dataclass
class ChangePendingNodeStatus200ApplicationJSONData:
    nodes: List[shared.NodeFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class ChangePendingNodeStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ChangePendingNodeStatus200ApplicationJSON:
    action: ChangePendingNodeStatus200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ChangePendingNodeStatus200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ChangePendingNodeStatus200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ChangePendingNodeStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    change_pending_node_status_200_application_json_object: Optional[ChangePendingNodeStatus200ApplicationJSON] = field(default=None)
    
