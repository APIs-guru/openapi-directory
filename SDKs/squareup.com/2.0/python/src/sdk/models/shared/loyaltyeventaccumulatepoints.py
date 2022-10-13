from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyEventAccumulatePoints:
    loyalty_program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_program_id' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    
