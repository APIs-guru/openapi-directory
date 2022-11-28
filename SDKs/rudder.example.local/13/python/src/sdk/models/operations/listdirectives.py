from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_DIRECTIVES = "listDirectives"


@dataclass_json
@dataclass
class ListDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListDirectives200ApplicationJSON:
    action: ListDirectives200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListDirectives200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListDirectives200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListDirectivesResponse:
    content_type: str = field()
    status_code: int = field()
    list_directives_200_application_json_object: Optional[ListDirectives200ApplicationJSON] = field(default=None)
    
