from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field(default=None)
    request: shared.Users = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateUser200ApplicationJSONActionEnum(str, Enum):
    UPDATE_USER = "updateUser"


@dataclass_json
@dataclass
class UpdateUser200ApplicationJSONDataUpdatedUser:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class UpdateUser200ApplicationJSONData:
    updated_user: UpdateUser200ApplicationJSONDataUpdatedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedUser' }})
    
class UpdateUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateUser200ApplicationJSON:
    action: UpdateUser200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateUser200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateUser200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_user_200_application_json_object: Optional[UpdateUser200ApplicationJSON] = field(default=None)
    
