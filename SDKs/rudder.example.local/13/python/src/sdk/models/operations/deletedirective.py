from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteDirectivePathParams:
    directive_id: str = field(default=None, metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDirectiveRequest:
    path_params: DeleteDirectivePathParams = field(default=None)
    
class DeleteDirective200ApplicationJSONActionEnum(str, Enum):
    DELETE_DIRECTIVE = "deleteDirective"


@dataclass_json
@dataclass
class DeleteDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class DeleteDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteDirective200ApplicationJSON:
    action: DeleteDirective200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteDirective200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteDirective200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteDirectiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_directive_200_application_json_object: Optional[DeleteDirective200ApplicationJSON] = field(default=None)
    
