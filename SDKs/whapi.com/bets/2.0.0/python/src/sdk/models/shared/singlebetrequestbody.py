from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SingleBetRequestBody:
    delayed_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedBetId' }})
    free_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBetId' }})
    price_den: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDen' }})
    price_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceNum' }})
    price_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceType' }})
    selection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionId' }})
    stake: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stake' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
