from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteNodePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeQueryParams:
    mode: Optional[shared.NodeDeleteModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = field(default=None)
    query_params: DeleteNodeQueryParams = field(default=None)
    
class DeleteNode200ApplicationJSONActionEnum(str, Enum):
    DELETE_NODE = "deleteNode"


@dataclass_json
@dataclass
class DeleteNode200ApplicationJSONData:
    nodes: List[shared.NodeFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class DeleteNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteNode200ApplicationJSON:
    action: DeleteNode200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteNode200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteNode200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_node_200_application_json_object: Optional[DeleteNode200ApplicationJSON] = field(default=None)
    
