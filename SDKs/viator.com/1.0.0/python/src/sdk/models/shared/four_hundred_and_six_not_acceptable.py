from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FourHundredAndSixNotAcceptableCodeEnum(str, Enum):
    INVALID_HEADER_VALUE = "INVALID_HEADER_VALUE"


@dataclass_json
@dataclass
class FourHundredAndSixNotAcceptable:
    code: Optional[FourHundredAndSixNotAcceptableCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    
