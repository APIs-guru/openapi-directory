from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteNodePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeQueryParams:
    mode: Optional[shared.NodeDeleteModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    
class DeleteNode200ApplicationJSONActionEnum(str, Enum):
    DELETE_NODE = "deleteNode"


@dataclass_json
@dataclass
class DeleteNode200ApplicationJSONData:
    r"""DeleteNode200ApplicationJSONData
    Information about the node
    """
    
    nodes: List[shared.NodeFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class DeleteNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteNode200ApplicationJSON:
    action: DeleteNode200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteNode200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteNode200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = field()
    query_params: DeleteNodeQueryParams = field()
    

@dataclass
class DeleteNodeResponse:
    content_type: str = field()
    status_code: int = field()
    delete_node_200_application_json_object: Optional[DeleteNode200ApplicationJSON] = field(default=None)
    
