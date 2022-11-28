from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Betslipbet:
    legs: List[Betslipleg] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    bet_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betMultiplier') }})
    free_bets: Optional[List[FreeBetDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBets') }})
    max_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxStake') }})
    min_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minStake') }})
    num_lines: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLines') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    
