from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchLoyaltyRewardsRequestLoyaltyRewardQuery:
    loyalty_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
