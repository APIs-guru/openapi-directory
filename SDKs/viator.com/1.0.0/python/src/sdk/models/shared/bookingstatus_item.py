from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BookingStatusItemLevelEnum(str, Enum):
    ITEM = "ITEM"
    ITINERARY = "ITINERARY"

class BookingStatusItemTypeEnum(str, Enum):
    WAITING = "WAITING"
    CONFIRMED = "CONFIRMED"
    UNAVAILABLE = "UNAVAILABLE"
    PENDING = "PENDING"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"
    AMENDED = "AMENDED"
    PENDING_AMEND = "PENDING_AMEND"
    REJECTED = "REJECTED"
    ON_HOLD = "ON_HOLD"


@dataclass_json
@dataclass
class BookingStatusItem:
    amended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amended' }})
    cancelled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelled' }})
    confirmed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    failed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    level: Optional[BookingStatusItemLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[BookingStatusItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
