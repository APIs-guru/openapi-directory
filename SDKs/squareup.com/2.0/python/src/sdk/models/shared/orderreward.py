from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderReward:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reward_tier_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward_tier_id' }})
    
