from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChangeRequestDetailsPathParams:
    change_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeRequestDetailsRequest:
    path_params: ChangeRequestDetailsPathParams = field(default=None)
    
class ChangeRequestDetails200ApplicationJSONActionEnum(str, Enum):
    CHANGE_REQUEST_DETAILS = "changeRequestDetails"


@dataclass_json
@dataclass
class ChangeRequestDetails200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class ChangeRequestDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ChangeRequestDetails200ApplicationJSON:
    action: ChangeRequestDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ChangeRequestDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ChangeRequestDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ChangeRequestDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    change_request_details_200_application_json_object: Optional[ChangeRequestDetails200ApplicationJSON] = field(default=None)
    
