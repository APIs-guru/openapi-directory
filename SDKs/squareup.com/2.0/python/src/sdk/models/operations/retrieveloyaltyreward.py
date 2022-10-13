from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLoyaltyRewardPathParams:
    reward_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reward_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLoyaltyRewardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveLoyaltyRewardRequest:
    path_params: RetrieveLoyaltyRewardPathParams = field(default=None)
    security: RetrieveLoyaltyRewardSecurity = field(default=None)
    

@dataclass
class RetrieveLoyaltyRewardResponse:
    content_type: str = field(default=None)
    retrieve_loyalty_reward_response: Optional[shared.RetrieveLoyaltyRewardResponse] = field(default=None)
    status_code: int = field(default=None)
    
