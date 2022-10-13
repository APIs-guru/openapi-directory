from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BetDelayed:
    delay_period_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayPeriodSeconds' }})
    delayed_bet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedBetId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    
