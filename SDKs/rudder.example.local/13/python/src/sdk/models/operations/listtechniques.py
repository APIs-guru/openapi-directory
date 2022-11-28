from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListTechniques200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES = "listTechniques"


@dataclass_json
@dataclass
class ListTechniques200ApplicationJSONData:
    techniques: List[shared.Techniques] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniques') }})
    
class ListTechniques200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniques200ApplicationJSON:
    action: ListTechniques200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniques200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniques200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListTechniquesResponse:
    content_type: str = field()
    status_code: int = field()
    list_techniques_200_application_json_object: Optional[ListTechniques200ApplicationJSON] = field(default=None)
    
