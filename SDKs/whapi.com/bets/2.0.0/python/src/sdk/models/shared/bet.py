from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leg


@dataclass_json
@dataclass
class Bet:
    delayed_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedBetId' }})
    free_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBetId' }})
    legs: List[leg.Leg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    stake: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stake' }})
    type_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeCode' }})
    
