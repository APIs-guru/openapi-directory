from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import loyaltyreward


@dataclass_json
@dataclass
class CreateLoyaltyRewardRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    reward: loyaltyreward.LoyaltyReward = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward' }})
    
