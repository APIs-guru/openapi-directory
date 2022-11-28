from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class AddUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"


@dataclass_json
@dataclass
class AddUser200ApplicationJSONDataAddedUser:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class AddUser200ApplicationJSONData:
    added_user: AddUser200ApplicationJSONDataAddedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedUser') }})
    
class AddUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class AddUser200ApplicationJSON:
    action: AddUser200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: AddUser200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: AddUser200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class AddUserRequest:
    request: shared.Users = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddUserResponse:
    content_type: str = field()
    status_code: int = field()
    add_user_200_application_json_object: Optional[AddUser200ApplicationJSON] = field(default=None)
    
