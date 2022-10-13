from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RedeemLoyaltyRewardPathParams:
    reward_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reward_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RedeemLoyaltyRewardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RedeemLoyaltyRewardRequest:
    path_params: RedeemLoyaltyRewardPathParams = field(default=None)
    request: shared.RedeemLoyaltyRewardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RedeemLoyaltyRewardSecurity = field(default=None)
    

@dataclass
class RedeemLoyaltyRewardResponse:
    content_type: str = field(default=None)
    redeem_loyalty_reward_response: Optional[shared.RedeemLoyaltyRewardResponse] = field(default=None)
    status_code: int = field(default=None)
    
