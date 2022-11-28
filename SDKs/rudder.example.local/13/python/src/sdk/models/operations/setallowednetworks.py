from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SetAllowedNetworksPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetAllowedNetworksRequestBody:
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class SetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_ALLOWED_NETWORKS = "modifyAllowedNetworks"


@dataclass_json
@dataclass
class SetAllowedNetworks200ApplicationJSONData:
    r"""SetAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    allowed_networks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class SetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class SetAllowedNetworks200ApplicationJSON:
    action: SetAllowedNetworks200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: SetAllowedNetworks200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: SetAllowedNetworks200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass
class SetAllowedNetworksRequest:
    path_params: SetAllowedNetworksPathParams = field()
    request: SetAllowedNetworksRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetAllowedNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    set_allowed_networks_200_application_json_object: Optional[SetAllowedNetworks200ApplicationJSON] = field(default=None)
    
