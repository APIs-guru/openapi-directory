from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLoyaltyRewardPathParams:
    reward_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reward_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLoyaltyRewardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLoyaltyRewardRequest:
    path_params: DeleteLoyaltyRewardPathParams = field(default=None)
    security: DeleteLoyaltyRewardSecurity = field(default=None)
    

@dataclass
class DeleteLoyaltyRewardResponse:
    content_type: str = field(default=None)
    delete_loyalty_reward_response: Optional[shared.DeleteLoyaltyRewardResponse] = field(default=None)
    status_code: int = field(default=None)
    
