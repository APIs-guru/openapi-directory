from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FourHundredAndOneUnauthorizedCodeEnum(str, Enum):
    UNAUTHORIZED = "UNAUTHORIZED"

class FourHundredAndOneUnauthorizedMessageEnum(str, Enum):
    INVALID_API_KEY = "Invalid API key"


@dataclass_json
@dataclass
class FourHundredAndOneUnauthorized:
    code: Optional[FourHundredAndOneUnauthorizedCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[FourHundredAndOneUnauthorizedMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
