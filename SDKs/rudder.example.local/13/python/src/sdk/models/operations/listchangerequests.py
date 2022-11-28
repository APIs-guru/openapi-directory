from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListChangeRequests200ApplicationJSONActionEnum(str, Enum):
    LIST_CHANGE_REQUESTS = "listChangeRequests"


@dataclass_json
@dataclass
class ListChangeRequests200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ListChangeRequests200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListChangeRequests200ApplicationJSON:
    action: ListChangeRequests200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListChangeRequests200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListChangeRequests200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListChangeRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    list_change_requests_200_application_json_object: Optional[ListChangeRequests200ApplicationJSON] = field(default=None)
    
