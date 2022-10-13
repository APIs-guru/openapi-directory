from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BetPlaced:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    num_lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numLines' }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    placed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placedDateTime' }})
    receipt: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt' }})
    total_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalStake' }})
    
