from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetNodesStatusQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNodesStatusRequest:
    query_params: GetNodesStatusQueryParams = field(default=None)
    
class GetNodesStatus200ApplicationJSONActionEnum(str, Enum):
    GET_NODES_STATUS = "getNodesStatus"

class GetNodesStatus200ApplicationJSONDataNodesStatusEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    DELETED = "deleted"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetNodesStatus200ApplicationJSONDataNodes:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: GetNodesStatus200ApplicationJSONDataNodesStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetNodesStatus200ApplicationJSONData:
    nodes: List[GetNodesStatus200ApplicationJSONDataNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class GetNodesStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNodesStatus200ApplicationJSON:
    action: GetNodesStatus200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetNodesStatus200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetNodesStatus200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetNodesStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_nodes_status_200_application_json_object: Optional[GetNodesStatus200ApplicationJSON] = field(default=None)
    
