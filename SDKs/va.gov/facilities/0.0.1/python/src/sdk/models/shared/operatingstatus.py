from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OperatingStatusCodeEnum(str, Enum):
    NORMAL = "NORMAL"
    NOTICE = "NOTICE"
    LIMITED = "LIMITED"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class OperatingStatus:
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_info' }})
    code: OperatingStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
