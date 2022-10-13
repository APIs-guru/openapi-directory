from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class CheckStatusEnum(str, Enum):
    CRITICAL = "Critical"
    WARNING = "Warning"
    OK = "Ok"


@dataclass_json
@dataclass
class Check:
    msg: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: CheckStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
