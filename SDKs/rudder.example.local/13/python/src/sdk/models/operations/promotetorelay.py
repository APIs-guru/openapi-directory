from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PromoteToRelayPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class PromoteToRelay200ApplicationJSONActionEnum(str, Enum):
    PROMOTE_TO_RELAY = "promoteToRelay"

class PromoteToRelay200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class PromoteToRelay200ApplicationJSON:
    action: PromoteToRelay200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: PromoteToRelay200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PromoteToRelayRequest:
    path_params: PromoteToRelayPathParams = field()
    

@dataclass
class PromoteToRelayResponse:
    content_type: str = field()
    status_code: int = field()
    promote_to_relay_200_application_json_object: Optional[PromoteToRelay200ApplicationJSON] = field(default=None)
    
