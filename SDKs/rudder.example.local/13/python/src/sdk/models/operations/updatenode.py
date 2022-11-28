from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateNodePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class UpdateNode200ApplicationJSONActionEnum(str, Enum):
    UPDATE_NODE = "updateNode"


@dataclass_json
@dataclass
class UpdateNode200ApplicationJSONData:
    r"""UpdateNode200ApplicationJSONData
    Information about the node
    """
    
    nodes: List[shared.NodeFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class UpdateNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateNode200ApplicationJSON:
    action: UpdateNode200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateNode200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateNode200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateNodeRequest:
    path_params: UpdateNodePathParams = field()
    request: Optional[shared.NodeSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNodeResponse:
    content_type: str = field()
    status_code: int = field()
    update_node_200_application_json_object: Optional[UpdateNode200ApplicationJSON] = field(default=None)
    
