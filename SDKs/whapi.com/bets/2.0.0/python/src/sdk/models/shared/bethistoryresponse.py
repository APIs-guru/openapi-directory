from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placedbet


@dataclass_json
@dataclass
class BetHistoryResponse:
    bets: Optional[List[placedbet.PlacedBet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bets' }})
    
