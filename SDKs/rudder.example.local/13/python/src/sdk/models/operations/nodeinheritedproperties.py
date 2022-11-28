from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class NodeInheritedPropertiesPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class NodeInheritedProperties200ApplicationJSONActionEnum(str, Enum):
    NODE_INHERITED_PROPERTIES = "nodeInheritedProperties"

class NodeInheritedProperties200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class NodeInheritedProperties200ApplicationJSON:
    action: NodeInheritedProperties200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: List[shared.NodeInheritedProperties] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: NodeInheritedProperties200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class NodeInheritedPropertiesRequest:
    path_params: NodeInheritedPropertiesPathParams = field()
    

@dataclass
class NodeInheritedPropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    node_inherited_properties_200_application_json_object: Optional[NodeInheritedProperties200ApplicationJSON] = field(default=None)
    
