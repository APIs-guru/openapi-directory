from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateDirective200ApplicationJSONActionEnum(str, Enum):
    CREATE_DIRECTIVE = "createDirective"


@dataclass_json
@dataclass
class CreateDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class CreateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDirective200ApplicationJSON:
    action: CreateDirective200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateDirective200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateDirective200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateDirectiveRequest:
    request: Optional[shared.DirectiveNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDirectiveResponse:
    content_type: str = field()
    status_code: int = field()
    create_directive_200_application_json_object: Optional[CreateDirective200ApplicationJSON] = field(default=None)
    
