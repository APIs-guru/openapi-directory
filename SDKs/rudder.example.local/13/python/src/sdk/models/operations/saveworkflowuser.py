from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class SaveWorkflowUserRequestBody:
    validated_users: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedUsers') }})
    
class SaveWorkflowUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"

class SaveWorkflowUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class SaveWorkflowUser200ApplicationJSON:
    action: SaveWorkflowUser200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: shared.ValidatedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: SaveWorkflowUser200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class SaveWorkflowUserRequest:
    request: SaveWorkflowUserRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SaveWorkflowUserResponse:
    content_type: str = field()
    status_code: int = field()
    save_workflow_user_200_application_json_object: Optional[SaveWorkflowUser200ApplicationJSON] = field(default=None)
    
