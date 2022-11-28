from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ModifyAllowedNetworksPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifyAllowedNetworksRequestBodyAllowedNetworks:
    add: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    delete: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class ModifyAllowedNetworksRequestBody:
    allowed_networks: Optional[ModifyAllowedNetworksRequestBodyAllowedNetworks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class ModifyAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclass
class ModifyAllowedNetworks200ApplicationJSONData:
    r"""ModifyAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    allowed_networks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class ModifyAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ModifyAllowedNetworks200ApplicationJSON:
    action: ModifyAllowedNetworks200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ModifyAllowedNetworks200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ModifyAllowedNetworks200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ModifyAllowedNetworksRequest:
    path_params: ModifyAllowedNetworksPathParams = field()
    request: ModifyAllowedNetworksRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyAllowedNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    modify_allowed_networks_200_application_json_object: Optional[ModifyAllowedNetworks200ApplicationJSON] = field(default=None)
    
