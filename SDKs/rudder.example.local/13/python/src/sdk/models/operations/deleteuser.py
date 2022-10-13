from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field(default=None)
    
class DeleteUser200ApplicationJSONActionEnum(str, Enum):
    DELETE_USER = "deleteUser"


@dataclass_json
@dataclass
class DeleteUser200ApplicationJSONDataDeletedUser:
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class DeleteUser200ApplicationJSONData:
    deleted_user: DeleteUser200ApplicationJSONDataDeletedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedUser' }})
    
class DeleteUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteUser200ApplicationJSON:
    action: DeleteUser200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteUser200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteUser200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_user_200_application_json_object: Optional[DeleteUser200ApplicationJSON] = field(default=None)
    
