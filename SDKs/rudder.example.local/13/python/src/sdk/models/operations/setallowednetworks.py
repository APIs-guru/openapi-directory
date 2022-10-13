from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetAllowedNetworksPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetAllowedNetworksRequestBody:
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass
class SetAllowedNetworksRequest:
    path_params: SetAllowedNetworksPathParams = field(default=None)
    request: SetAllowedNetworksRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class SetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_ALLOWED_NETWORKS = "modifyAllowedNetworks"


@dataclass_json
@dataclass
class SetAllowedNetworks200ApplicationJSONData:
    allowed_networks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_networks' }})
    
class SetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class SetAllowedNetworks200ApplicationJSON:
    action: SetAllowedNetworks200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: SetAllowedNetworks200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: SetAllowedNetworks200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class SetAllowedNetworksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_allowed_networks_200_application_json_object: Optional[SetAllowedNetworks200ApplicationJSON] = field(default=None)
    
