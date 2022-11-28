from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDirectivePathParams:
    directive_id: str = field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class DeleteDirective200ApplicationJSONActionEnum(str, Enum):
    DELETE_DIRECTIVE = "deleteDirective"


@dataclass_json
@dataclass
class DeleteDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class DeleteDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteDirective200ApplicationJSON:
    action: DeleteDirective200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteDirective200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteDirective200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteDirectiveRequest:
    path_params: DeleteDirectivePathParams = field()
    

@dataclass
class DeleteDirectiveResponse:
    content_type: str = field()
    status_code: int = field()
    delete_directive_200_application_json_object: Optional[DeleteDirective200ApplicationJSON] = field(default=None)
    
