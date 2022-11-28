from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListUsers200ApplicationJSONActionEnum(str, Enum):
    LIST_USERS = "listUsers"

class ListUsers200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListUsers200ApplicationJSON:
    action: ListUsers200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: List[shared.ValidatedUser] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListUsers200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListUsersResponse:
    content_type: str = field()
    status_code: int = field()
    list_users_200_application_json_object: Optional[ListUsers200ApplicationJSON] = field(default=None)
    
