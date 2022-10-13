from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeclineChangeRequestPathParams:
    change_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeclineChangeRequestRequest:
    path_params: DeclineChangeRequestPathParams = field(default=None)
    
class DeclineChangeRequest200ApplicationJSONActionEnum(str, Enum):
    DECLINE_CHANGE_REQUEST = "declineChangeRequest"


@dataclass_json
@dataclass
class DeclineChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class DeclineChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeclineChangeRequest200ApplicationJSON:
    action: DeclineChangeRequest200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeclineChangeRequest200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeclineChangeRequest200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeclineChangeRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    decline_change_request_200_application_json_object: Optional[DeclineChangeRequest200ApplicationJSON] = field(default=None)
    
