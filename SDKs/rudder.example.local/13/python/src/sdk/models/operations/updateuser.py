from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class UpdateUser200ApplicationJSONActionEnum(str, Enum):
    UPDATE_USER = "updateUser"


@dataclass_json
@dataclass
class UpdateUser200ApplicationJSONDataUpdatedUser:
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class UpdateUser200ApplicationJSONData:
    updated_user: UpdateUser200ApplicationJSONDataUpdatedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedUser') }})
    
class UpdateUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateUser200ApplicationJSON:
    action: UpdateUser200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateUser200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateUser200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field()
    request: shared.Users = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    update_user_200_application_json_object: Optional[UpdateUser200ApplicationJSON] = field(default=None)
    
