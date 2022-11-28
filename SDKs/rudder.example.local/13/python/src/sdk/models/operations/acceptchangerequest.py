from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AcceptChangeRequestPathParams:
    change_request_id: int = field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    
class AcceptChangeRequestRequestBodyStatusEnum(str, Enum):
    PENDING_DEPLOYMENT = "pending deployment"
    DEPLOYED = "deployed"


@dataclass_json
@dataclass
class AcceptChangeRequestRequestBody:
    status: Optional[AcceptChangeRequestRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class AcceptChangeRequest200ApplicationJSONActionEnum(str, Enum):
    ACCEPT_CHANGE_REQUEST = "acceptChangeRequest"


@dataclass_json
@dataclass
class AcceptChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class AcceptChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class AcceptChangeRequest200ApplicationJSON:
    action: AcceptChangeRequest200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: AcceptChangeRequest200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: AcceptChangeRequest200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class AcceptChangeRequestRequest:
    path_params: AcceptChangeRequestPathParams = field()
    request: AcceptChangeRequestRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AcceptChangeRequestResponse:
    content_type: str = field()
    status_code: int = field()
    accept_change_request_200_application_json_object: Optional[AcceptChangeRequest200ApplicationJSON] = field(default=None)
    
