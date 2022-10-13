from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loyaltyprogramaccrualrule
from . import loyaltyprogramexpirationpolicy
from . import loyaltyprogramrewardtier
from . import loyaltyprogramterminology


@dataclass_json
@dataclass
class LoyaltyProgram:
    accrual_rules: List[loyaltyprogramaccrualrule.LoyaltyProgramAccrualRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accrual_rules' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    expiration_policy: Optional[loyaltyprogramexpirationpolicy.LoyaltyProgramExpirationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_policy' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ids' }})
    reward_tiers: List[loyaltyprogramrewardtier.LoyaltyProgramRewardTier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward_tiers' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    terminology: loyaltyprogramterminology.LoyaltyProgramTerminology = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminology' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
