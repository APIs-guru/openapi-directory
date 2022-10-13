from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Solution:
    bet_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betNum' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    handicap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handicap' }})
    handicap_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handicapPrecision' }})
    price_den: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDen' }})
    price_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceNum' }})
    selection_handicap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionHandicap' }})
    selection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionId' }})
    
