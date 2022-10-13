from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EventStatusCodeEnum(str, Enum):
    ONSALE = "onsale"
    OFFSALE = "offsale"
    CANCELED = "canceled"
    POSTPONED = "postponed"
    RESCHEDULED = "rescheduled"


@dataclass_json
@dataclass
class EventStatus:
    code: Optional[EventStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
