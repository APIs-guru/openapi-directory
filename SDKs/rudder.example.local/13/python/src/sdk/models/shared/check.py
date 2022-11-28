from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CheckStatusEnum(str, Enum):
    CRITICAL = "Critical"
    WARNING = "Warning"
    OK = "Ok"


@dataclass_json
@dataclass
class Check:
    msg: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: CheckStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
