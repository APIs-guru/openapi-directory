from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placedbetleg


@dataclass_json
@dataclass
class PlacedBet:
    cashin_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashinValue' }})
    estimated_returns: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedReturns' }})
    free_bet_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBetValue' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    legs: Optional[List[placedbetleg.PlacedBetLeg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    num_lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numLines' }})
    num_selections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numSelections' }})
    receipt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt' }})
    settled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settled' }})
    stake: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stake' }})
    stake_per_line: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stakePerLine' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    trans_date_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transDateTime' }})
    type_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeCode' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeName' }})
    winnings: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winnings' }})
    
