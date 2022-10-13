from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NodeInheritedPropertiesPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodeInheritedPropertiesRequest:
    path_params: NodeInheritedPropertiesPathParams = field(default=None)
    
class NodeInheritedProperties200ApplicationJSONActionEnum(str, Enum):
    NODE_INHERITED_PROPERTIES = "nodeInheritedProperties"

class NodeInheritedProperties200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class NodeInheritedProperties200ApplicationJSON:
    action: NodeInheritedProperties200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: List[shared.NodeInheritedProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: NodeInheritedProperties200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class NodeInheritedPropertiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    node_inherited_properties_200_application_json_object: Optional[NodeInheritedProperties200ApplicationJSON] = field(default=None)
    
