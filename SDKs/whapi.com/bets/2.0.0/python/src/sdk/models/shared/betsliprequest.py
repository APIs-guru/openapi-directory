from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leg


@dataclass_json
@dataclass
class BetSlipRequest:
    legs: Optional[List[leg.Leg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    
