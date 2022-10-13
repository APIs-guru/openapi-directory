from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CheckDirectivePathParams:
    directive_id: str = field(default=None, metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckDirectiveRequest:
    path_params: CheckDirectivePathParams = field(default=None)
    request: shared.Directive = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CheckDirective200ApplicationJSONActionEnum(str, Enum):
    CHECK_DIRECTIVE = "checkDirective"


@dataclass_json
@dataclass
class CheckDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class CheckDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CheckDirective200ApplicationJSON:
    action: CheckDirective200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CheckDirective200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CheckDirective200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CheckDirectiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_directive_200_application_json_object: Optional[CheckDirective200ApplicationJSON] = field(default=None)
    
