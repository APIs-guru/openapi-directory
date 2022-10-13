from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDirectiveRequest:
    request: Optional[shared.DirectiveNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateDirective200ApplicationJSONActionEnum(str, Enum):
    CREATE_DIRECTIVE = "createDirective"


@dataclass_json
@dataclass
class CreateDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class CreateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDirective200ApplicationJSON:
    action: CreateDirective200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateDirective200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateDirective200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateDirectiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_directive_200_application_json_object: Optional[CreateDirective200ApplicationJSON] = field(default=None)
    
