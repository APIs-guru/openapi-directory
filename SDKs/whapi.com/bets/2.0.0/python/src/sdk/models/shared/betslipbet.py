from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import freebetdetail
from . import betslipleg


@dataclass_json
@dataclass
class Betslipbet:
    bet_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betMultiplier' }})
    free_bets: Optional[List[freebetdetail.FreeBetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBets' }})
    legs: List[betslipleg.Betslipleg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    max_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxStake' }})
    min_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minStake' }})
    num_lines: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numLines' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    type_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeCode' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeName' }})
    
