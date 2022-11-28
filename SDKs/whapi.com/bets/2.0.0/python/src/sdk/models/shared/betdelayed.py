from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BetDelayed:
    delay_period_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayPeriodSeconds') }})
    delayed_bet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
