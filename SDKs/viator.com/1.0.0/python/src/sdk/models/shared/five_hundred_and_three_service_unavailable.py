from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FiveHundredAndThreeServiceUnavailableCodeEnum(str, Enum):
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"

class FiveHundredAndThreeServiceUnavailableMessageEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class FiveHundredAndThreeServiceUnavailable:
    code: Optional[FiveHundredAndThreeServiceUnavailableCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[FiveHundredAndThreeServiceUnavailableMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    
