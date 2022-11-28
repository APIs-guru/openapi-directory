from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteUser200ApplicationJSONActionEnum(str, Enum):
    DELETE_USER = "deleteUser"


@dataclass_json
@dataclass
class DeleteUser200ApplicationJSONDataDeletedUser:
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class DeleteUser200ApplicationJSONData:
    deleted_user: DeleteUser200ApplicationJSONDataDeletedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedUser') }})
    
class DeleteUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteUser200ApplicationJSON:
    action: DeleteUser200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteUser200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteUser200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field()
    

@dataclass
class DeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    delete_user_200_application_json_object: Optional[DeleteUser200ApplicationJSON] = field(default=None)
    
