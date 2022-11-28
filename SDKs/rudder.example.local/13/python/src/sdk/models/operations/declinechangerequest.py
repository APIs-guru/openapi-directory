from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeclineChangeRequestPathParams:
    change_request_id: int = field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class DeclineChangeRequest200ApplicationJSONActionEnum(str, Enum):
    DECLINE_CHANGE_REQUEST = "declineChangeRequest"


@dataclass_json
@dataclass
class DeclineChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class DeclineChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeclineChangeRequest200ApplicationJSON:
    action: DeclineChangeRequest200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeclineChangeRequest200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeclineChangeRequest200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeclineChangeRequestRequest:
    path_params: DeclineChangeRequestPathParams = field()
    

@dataclass
class DeclineChangeRequestResponse:
    content_type: str = field()
    status_code: int = field()
    decline_change_request_200_application_json_object: Optional[DeclineChangeRequest200ApplicationJSON] = field(default=None)
    
