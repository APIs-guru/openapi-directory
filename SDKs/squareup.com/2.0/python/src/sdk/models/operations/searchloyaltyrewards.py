from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchLoyaltyRewardsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchLoyaltyRewardsRequest:
    request: shared.SearchLoyaltyRewardsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchLoyaltyRewardsSecurity = field(default=None)
    

@dataclass
class SearchLoyaltyRewardsResponse:
    content_type: str = field(default=None)
    search_loyalty_rewards_response: Optional[shared.SearchLoyaltyRewardsResponse] = field(default=None)
    status_code: int = field(default=None)
    
