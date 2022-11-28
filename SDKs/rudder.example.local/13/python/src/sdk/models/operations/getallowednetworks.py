from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAllowedNetworksPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class GetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    GET_ALLOWED_NETWORKS = "getAllowedNetworks"


@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSONDataSettings:
    allowed_networks: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    

@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSONData:
    r"""GetAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    settings: GetAllowedNetworks200ApplicationJSONDataSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class GetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllowedNetworks200ApplicationJSON:
    action: GetAllowedNetworks200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllowedNetworks200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: GetAllowedNetworks200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetAllowedNetworksRequest:
    path_params: GetAllowedNetworksPathParams = field()
    

@dataclass
class GetAllowedNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    get_allowed_networks_200_application_json_object: Optional[GetAllowedNetworks200ApplicationJSON] = field(default=None)
    
