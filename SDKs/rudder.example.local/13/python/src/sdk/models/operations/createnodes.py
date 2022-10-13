from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateNodesQueryParams:
    node_parameters: Optional[List[shared.NodeAdd]] = field(default=None, metadata={'query_param': { 'field_name': 'Node parameters', 'serialization': 'json' }})
    

@dataclass
class CreateNodesRequest:
    query_params: CreateNodesQueryParams = field(default=None)
    
class CreateNodes200ApplicationJSONActionEnum(str, Enum):
    CREATE_NODES = "createNodes"


@dataclass_json
@dataclass
class CreateNodes200ApplicationJSONData:
    created: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    failed: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    
class CreateNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateNodes200ApplicationJSON:
    action: CreateNodes200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateNodes200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateNodes200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateNodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_nodes_200_application_json_object: Optional[CreateNodes200ApplicationJSON] = field(default=None)
    
