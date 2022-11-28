from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ChangeRequestDetailsPathParams:
    change_request_id: int = field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class ChangeRequestDetails200ApplicationJSONActionEnum(str, Enum):
    CHANGE_REQUEST_DETAILS = "changeRequestDetails"


@dataclass_json
@dataclass
class ChangeRequestDetails200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ChangeRequestDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ChangeRequestDetails200ApplicationJSON:
    action: ChangeRequestDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ChangeRequestDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ChangeRequestDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ChangeRequestDetailsRequest:
    path_params: ChangeRequestDetailsPathParams = field()
    

@dataclass
class ChangeRequestDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    change_request_details_200_application_json_object: Optional[ChangeRequestDetails200ApplicationJSON] = field(default=None)
    
