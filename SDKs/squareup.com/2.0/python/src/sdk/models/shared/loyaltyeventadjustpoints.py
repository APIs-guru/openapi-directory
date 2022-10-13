from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyEventAdjustPoints:
    loyalty_program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_program_id' }})
    points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
