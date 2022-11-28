from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNodesQueryParams:
    node_parameters: Optional[List[shared.NodeAdd]] = field(default=None, metadata={'query_param': { 'field_name': 'Node parameters', 'serialization': 'json' }})
    
class CreateNodes200ApplicationJSONActionEnum(str, Enum):
    CREATE_NODES = "createNodes"


@dataclass_json
@dataclass
class CreateNodes200ApplicationJSONData:
    created: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    failed: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    
class CreateNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateNodes200ApplicationJSON:
    action: CreateNodes200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateNodes200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateNodes200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateNodesRequest:
    query_params: CreateNodesQueryParams = field()
    

@dataclass
class CreateNodesResponse:
    content_type: str = field()
    status_code: int = field()
    create_nodes_200_application_json_object: Optional[CreateNodes200ApplicationJSON] = field(default=None)
    
