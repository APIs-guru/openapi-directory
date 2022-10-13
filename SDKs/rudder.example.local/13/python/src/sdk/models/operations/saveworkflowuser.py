from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SaveWorkflowUserRequestBody:
    validated_users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedUsers' }})
    

@dataclass
class SaveWorkflowUserRequest:
    request: SaveWorkflowUserRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class SaveWorkflowUser200ApplicationJSONActionEnum(str, Enum):
    ADD_USER = "addUser"

class SaveWorkflowUser200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class SaveWorkflowUser200ApplicationJSON:
    action: SaveWorkflowUser200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: shared.ValidatedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: SaveWorkflowUser200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class SaveWorkflowUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    save_workflow_user_200_application_json_object: Optional[SaveWorkflowUser200ApplicationJSON] = field(default=None)
    
