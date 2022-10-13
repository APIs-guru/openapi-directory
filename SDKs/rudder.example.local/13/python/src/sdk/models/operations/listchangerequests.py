from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListChangeRequests200ApplicationJSONActionEnum(str, Enum):
    LIST_CHANGE_REQUESTS = "listChangeRequests"


@dataclass_json
@dataclass
class ListChangeRequests200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class ListChangeRequests200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListChangeRequests200ApplicationJSON:
    action: ListChangeRequests200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListChangeRequests200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListChangeRequests200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListChangeRequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_change_requests_200_application_json_object: Optional[ListChangeRequests200ApplicationJSON] = field(default=None)
    
