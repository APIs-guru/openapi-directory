from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateChangeRequestPathParams:
    change_request_id: int = field(default=None, metadata={'path_param': { 'field_name': 'changeRequestId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateChangeRequestRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateChangeRequestRequest:
    path_params: UpdateChangeRequestPathParams = field(default=None)
    request: UpdateChangeRequestRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateChangeRequest200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CHANGE_REQUEST = "updateChangeRequest"


@dataclass_json
@dataclass
class UpdateChangeRequest200ApplicationJSONData:
    rules: List[shared.ChangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class UpdateChangeRequest200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateChangeRequest200ApplicationJSON:
    action: UpdateChangeRequest200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateChangeRequest200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateChangeRequest200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateChangeRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_change_request_200_application_json_object: Optional[UpdateChangeRequest200ApplicationJSON] = field(default=None)
    
