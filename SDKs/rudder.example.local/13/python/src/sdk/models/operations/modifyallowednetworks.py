from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ModifyAllowedNetworksPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifyAllowedNetworksRequestBodyAllowedNetworks:
    add: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    delete: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class ModifyAllowedNetworksRequestBody:
    allowed_networks: Optional[ModifyAllowedNetworksRequestBodyAllowedNetworks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_networks' }})
    

@dataclass
class ModifyAllowedNetworksRequest:
    path_params: ModifyAllowedNetworksPathParams = field(default=None)
    request: ModifyAllowedNetworksRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class ModifyAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclass
class ModifyAllowedNetworks200ApplicationJSONData:
    allowed_networks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_networks' }})
    
class ModifyAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ModifyAllowedNetworks200ApplicationJSON:
    action: ModifyAllowedNetworks200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ModifyAllowedNetworks200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ModifyAllowedNetworks200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ModifyAllowedNetworksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    modify_allowed_networks_200_application_json_object: Optional[ModifyAllowedNetworks200ApplicationJSON] = field(default=None)
    
