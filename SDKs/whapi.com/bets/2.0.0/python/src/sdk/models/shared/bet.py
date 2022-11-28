from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Bet:
    legs: List[Leg] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    stake: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    type_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    delayed_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    free_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetId') }})
    
