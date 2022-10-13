from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateNodePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodeRequest:
    path_params: UpdateNodePathParams = field(default=None)
    request: Optional[shared.NodeSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateNode200ApplicationJSONActionEnum(str, Enum):
    UPDATE_NODE = "updateNode"


@dataclass_json
@dataclass
class UpdateNode200ApplicationJSONData:
    nodes: List[shared.NodeFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class UpdateNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateNode200ApplicationJSON:
    action: UpdateNode200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateNode200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateNode200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_node_200_application_json_object: Optional[UpdateNode200ApplicationJSON] = field(default=None)
    
