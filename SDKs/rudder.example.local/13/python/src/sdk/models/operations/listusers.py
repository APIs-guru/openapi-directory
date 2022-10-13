from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListUsers200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class ListUsers200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListUsers200ApplicationJSON:
    action: ListUsers200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: List[shared.ValidatedUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListUsers200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_users_200_application_json_object: Optional[ListUsers200ApplicationJSON] = field(default=None)
    
