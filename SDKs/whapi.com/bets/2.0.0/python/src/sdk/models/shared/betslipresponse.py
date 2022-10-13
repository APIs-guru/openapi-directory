from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import betslipbet


@dataclass_json
@dataclass
class BetSlipResponse:
    betslip: Optional[List[betslipbet.Betslipbet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betslip' }})
    
