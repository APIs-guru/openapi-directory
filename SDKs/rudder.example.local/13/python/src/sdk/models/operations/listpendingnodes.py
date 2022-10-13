from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListPendingNodesQueryParams:
    composition: Optional[shared.NodeCompositionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'composition', 'style': 'form', 'explode': True }})
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    query: Optional[shared.NodeQuery] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'serialization': 'json' }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    where: Optional[List[shared.NodeWhere]] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'serialization': 'json' }})
    

@dataclass
class ListPendingNodesRequest:
    query_params: ListPendingNodesQueryParams = field(default=None)
    
class ListPendingNodes200ApplicationJSONActionEnum(str, Enum):
    LIST_PENDING_NODES = "listPendingNodes"


@dataclass_json
@dataclass
class ListPendingNodes200ApplicationJSONData:
    nodes: List[shared.NodeFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class ListPendingNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListPendingNodes200ApplicationJSON:
    action: ListPendingNodes200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListPendingNodes200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListPendingNodes200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListPendingNodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_pending_nodes_200_application_json_object: Optional[ListPendingNodes200ApplicationJSON] = field(default=None)
    
