from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FiveHundredInternalServerErrorCodeEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"

class FiveHundredInternalServerErrorMessageEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class FiveHundredInternalServerError:
    code: Optional[FiveHundredInternalServerErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[FiveHundredInternalServerErrorMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
