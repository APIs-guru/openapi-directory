from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyreward


@dataclass_json
@dataclass
class SearchLoyaltyRewardsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    rewards: Optional[List[loyaltyreward.LoyaltyReward]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewards' }})
    
