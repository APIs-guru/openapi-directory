from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FreeBetDetail:
    award_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awardDateTime' }})
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayText' }})
    expiry_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDateTime' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    offer_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerDesc' }})
    offer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    offer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerName' }})
    start_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
