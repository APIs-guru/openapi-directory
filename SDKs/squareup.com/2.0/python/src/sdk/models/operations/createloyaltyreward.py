from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateLoyaltyRewardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLoyaltyRewardRequest:
    request: shared.CreateLoyaltyRewardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLoyaltyRewardSecurity = field(default=None)
    

@dataclass
class CreateLoyaltyRewardResponse:
    content_type: str = field(default=None)
    create_loyalty_reward_response: Optional[shared.CreateLoyaltyRewardResponse] = field(default=None)
    status_code: int = field(default=None)
    
