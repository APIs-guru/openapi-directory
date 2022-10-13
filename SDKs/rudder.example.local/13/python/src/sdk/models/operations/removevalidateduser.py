from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class RemoveValidatedUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveValidatedUserRequest:
    path_params: RemoveValidatedUserPathParams = field(default=None)
    
class RemoveValidatedUser200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class RemoveValidatedUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RemoveValidatedUser200ApplicationJSON:
    action: RemoveValidatedUser200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: RemoveValidatedUser200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class RemoveValidatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    remove_validated_user_200_application_json_object: Optional[RemoveValidatedUser200ApplicationJSON] = field(default=None)
    
