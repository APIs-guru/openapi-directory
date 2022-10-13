from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyEventDeleteReward:
    loyalty_program_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_program_id' }})
    points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    reward_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward_id' }})
    
