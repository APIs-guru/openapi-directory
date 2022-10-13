from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddUserRequest:
    request: shared.Users = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class AddUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"


@dataclass_json
@dataclass
class AddUser200ApplicationJSONDataAddedUser:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class AddUser200ApplicationJSONData:
    added_user: AddUser200ApplicationJSONDataAddedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedUser' }})
    
class AddUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class AddUser200ApplicationJSON:
    action: AddUser200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: AddUser200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: AddUser200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class AddUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_user_200_application_json_object: Optional[AddUser200ApplicationJSON] = field(default=None)
    
