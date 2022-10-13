from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDirectivePathParams:
    directive_id: str = field(default=None, metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDirectiveRequest:
    path_params: UpdateDirectivePathParams = field(default=None)
    request: shared.Directive = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateDirective200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DIRECTIVE = "updateDirective"


@dataclass_json
@dataclass
class UpdateDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class UpdateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDirective200ApplicationJSON:
    action: UpdateDirective200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateDirective200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateDirective200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateDirectiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_directive_200_application_json_object: Optional[UpdateDirective200ApplicationJSON] = field(default=None)
    
