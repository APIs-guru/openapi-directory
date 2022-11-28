from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PurgeSoftware200ApplicationJSONActionEnum(str, Enum):
    PURGE_SOFTWARE = "purgeSoftware"

class PurgeSoftware200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class PurgeSoftware200ApplicationJSON:
    action: PurgeSoftware200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: PurgeSoftware200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PurgeSoftwareResponse:
    content_type: str = field()
    status_code: int = field()
    purge_software_200_application_json_object: Optional[PurgeSoftware200ApplicationJSON] = field(default=None)
    
