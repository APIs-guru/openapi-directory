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
class UpdateChangeRequestPathParams:
    change_request_id: int = field(metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateChangeRequestRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class UpdateChangeRequest200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CHANGE_REQUEST = "updateChangeRequest"


@dataclass_json
@dataclass
class UpdateChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class UpdateChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateChangeRequest200ApplicationJSON:
    action: UpdateChangeRequest200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateChangeRequest200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateChangeRequest200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateChangeRequestRequest:
    path_params: UpdateChangeRequestPathParams = field()
    request: UpdateChangeRequestRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateChangeRequestResponse:
    content_type: str = field()
    status_code: int = field()
    update_change_request_200_application_json_object: Optional[UpdateChangeRequest200ApplicationJSON] = field(default=None)
    
