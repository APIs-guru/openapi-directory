from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RemoveValidatedUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class RemoveValidatedUser200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class RemoveValidatedUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RemoveValidatedUser200ApplicationJSON:
    action: RemoveValidatedUser200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RemoveValidatedUser200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class RemoveValidatedUserRequest:
    path_params: RemoveValidatedUserPathParams = field()
    

@dataclass
class RemoveValidatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    remove_validated_user_200_application_json_object: Optional[RemoveValidatedUser200ApplicationJSON] = field(default=None)
    
