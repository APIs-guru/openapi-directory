from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CheckDirectivePathParams:
    directive_id: str = field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class CheckDirective200ApplicationJSONActionEnum(str, Enum):
    CHECK_DIRECTIVE = "checkDirective"


@dataclass_json
@dataclass
class CheckDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class CheckDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CheckDirective200ApplicationJSON:
    action: CheckDirective200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CheckDirective200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CheckDirective200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CheckDirectiveRequest:
    path_params: CheckDirectivePathParams = field()
    request: shared.Directive = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckDirectiveResponse:
    content_type: str = field()
    status_code: int = field()
    check_directive_200_application_json_object: Optional[CheckDirective200ApplicationJSON] = field(default=None)
    
