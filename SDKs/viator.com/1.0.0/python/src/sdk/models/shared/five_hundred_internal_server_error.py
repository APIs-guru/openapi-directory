from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FiveHundredInternalServerErrorCodeEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"

class FiveHundredInternalServerErrorMessageEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class FiveHundredInternalServerError:
    code: Optional[FiveHundredInternalServerErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[FiveHundredInternalServerErrorMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    
