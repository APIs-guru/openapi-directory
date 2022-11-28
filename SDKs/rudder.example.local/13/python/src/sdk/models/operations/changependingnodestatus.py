from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ChangePendingNodeStatusPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ChangePendingNodeStatusRequestBodyStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    REFUSED = "refused"


@dataclass_json
@dataclass
class ChangePendingNodeStatusRequestBody:
    status: Optional[ChangePendingNodeStatusRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class ChangePendingNodeStatus200ApplicationJSONActionEnum(str, Enum):
    CHANGE_PENDING_NODE_STATUS = "changePendingNodeStatus"


@dataclass_json
@dataclass
class ChangePendingNodeStatus200ApplicationJSONData:
    r"""ChangePendingNodeStatus200ApplicationJSONData
    Information about the node
    """
    
    nodes: List[shared.NodeFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class ChangePendingNodeStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ChangePendingNodeStatus200ApplicationJSON:
    action: ChangePendingNodeStatus200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ChangePendingNodeStatus200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ChangePendingNodeStatus200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ChangePendingNodeStatusRequest:
    path_params: ChangePendingNodeStatusPathParams = field()
    request: Optional[ChangePendingNodeStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePendingNodeStatusResponse:
    content_type: str = field()
    status_code: int = field()
    change_pending_node_status_200_application_json_object: Optional[ChangePendingNodeStatus200ApplicationJSON] = field(default=None)
    
