from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListAcceptedNodesQueryParams:
    composition: Optional[shared.NodeCompositionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'composition', 'style': 'form', 'explode': True }})
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    query: Optional[shared.NodeQuery] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'serialization': 'json' }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    where: Optional[List[shared.NodeWhere]] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'serialization': 'json' }})
    
class ListAcceptedNodes200ApplicationJSONActionEnum(str, Enum):
    LIST_ACCEPTED_NODES = "listAcceptedNodes"


@dataclass_json
@dataclass
class ListAcceptedNodes200ApplicationJSONData:
    r"""ListAcceptedNodes200ApplicationJSONData
    Information about the nodes
    """
    
    nodes: List[shared.NodeFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class ListAcceptedNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListAcceptedNodes200ApplicationJSON:
    action: ListAcceptedNodes200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListAcceptedNodes200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListAcceptedNodes200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListAcceptedNodesRequest:
    query_params: ListAcceptedNodesQueryParams = field()
    

@dataclass
class ListAcceptedNodesResponse:
    content_type: str = field()
    status_code: int = field()
    list_accepted_nodes_200_application_json_object: Optional[ListAcceptedNodes200ApplicationJSON] = field(default=None)
    
