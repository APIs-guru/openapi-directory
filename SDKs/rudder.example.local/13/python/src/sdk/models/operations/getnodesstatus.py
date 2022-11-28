from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNodesStatusQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    
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
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: GetNodesStatus200ApplicationJSONDataNodesStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetNodesStatus200ApplicationJSONData:
    r"""GetNodesStatus200ApplicationJSONData
    List of nodeId and associated status
    """
    
    nodes: List[GetNodesStatus200ApplicationJSONDataNodes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodesStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNodesStatus200ApplicationJSON:
    action: GetNodesStatus200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodesStatus200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodesStatus200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetNodesStatusRequest:
    query_params: GetNodesStatusQueryParams = field()
    

@dataclass
class GetNodesStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_nodes_status_200_application_json_object: Optional[GetNodesStatus200ApplicationJSON] = field(default=None)
    
