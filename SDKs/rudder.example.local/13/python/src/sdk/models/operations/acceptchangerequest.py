from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AcceptChangeRequestPathParams:
    change_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class AcceptChangeRequestRequestBodyStatusEnum(str, Enum):
    PENDING_DEPLOYMENT = "pending deployment"
    DEPLOYED = "deployed"


@dataclass_json
@dataclass
class AcceptChangeRequestRequestBody:
    status: Optional[AcceptChangeRequestRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class AcceptChangeRequestRequest:
    path_params: AcceptChangeRequestPathParams = field(default=None)
    request: AcceptChangeRequestRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class AcceptChangeRequest200ApplicationJSONActionEnum(str, Enum):
    ACCEPT_CHANGE_REQUEST = "acceptChangeRequest"


@dataclass_json
@dataclass
class AcceptChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class AcceptChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class AcceptChangeRequest200ApplicationJSON:
    action: AcceptChangeRequest200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: AcceptChangeRequest200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: AcceptChangeRequest200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class AcceptChangeRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accept_change_request_200_application_json_object: Optional[AcceptChangeRequest200ApplicationJSON] = field(default=None)
    
