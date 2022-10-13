from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAllowedNetworksPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllowedNetworksRequest:
    path_params: GetAllowedNetworksPathParams = field(default=None)
    
class GetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    GET_ALLOWED_NETWORKS = "getAllowedNetworks"


@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSONDataSettings:
    allowed_networks: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_networks' }})
    

@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSONData:
    settings: GetAllowedNetworks200ApplicationJSONDataSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class GetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSON:
    action: GetAllowedNetworks200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetAllowedNetworks200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: GetAllowedNetworks200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetAllowedNetworksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_allowed_networks_200_application_json_object: Optional[GetAllowedNetworks200ApplicationJSON] = field(default=None)
    
