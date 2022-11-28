from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class NodeDetailsPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodeDetailsQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    
class NodeDetails200ApplicationJSONActionEnum(str, Enum):
    NODE_DETAILS = "nodeDetails"


@dataclass_json
@dataclass
class NodeDetails200ApplicationJSONData:
    r"""NodeDetails200ApplicationJSONData
    Information about the node
    """
    
    nodes: List[shared.NodeFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class NodeDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class NodeDetails200ApplicationJSON:
    action: NodeDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: NodeDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: NodeDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class NodeDetailsRequest:
    path_params: NodeDetailsPathParams = field()
    query_params: NodeDetailsQueryParams = field()
    

@dataclass
class NodeDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    node_details_200_application_json_object: Optional[NodeDetails200ApplicationJSON] = field(default=None)
    
