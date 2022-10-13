from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PromoteToRelayPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PromoteToRelayRequest:
    path_params: PromoteToRelayPathParams = field(default=None)
    
class PromoteToRelay200ApplicationJSONActionEnum(str, Enum):
    PROMOTE_TO_RELAY = "promoteToRelay"

class PromoteToRelay200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class PromoteToRelay200ApplicationJSON:
    action: PromoteToRelay200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: PromoteToRelay200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PromoteToRelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    promote_to_relay_200_application_json_object: Optional[PromoteToRelay200ApplicationJSON] = field(default=None)
    
