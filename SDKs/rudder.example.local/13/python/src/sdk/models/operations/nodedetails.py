from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NodeDetailsPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodeDetailsQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class NodeDetailsRequest:
    path_params: NodeDetailsPathParams = field(default=None)
    query_params: NodeDetailsQueryParams = field(default=None)
    
class NodeDetails200ApplicationJSONActionEnum(str, Enum):
    NODE_DETAILS = "nodeDetails"


@dataclass_json
@dataclass
class NodeDetails200ApplicationJSONData:
    nodes: List[shared.NodeFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class NodeDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class NodeDetails200ApplicationJSON:
    action: NodeDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: NodeDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: NodeDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class NodeDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    node_details_200_application_json_object: Optional[NodeDetails200ApplicationJSON] = field(default=None)
    
