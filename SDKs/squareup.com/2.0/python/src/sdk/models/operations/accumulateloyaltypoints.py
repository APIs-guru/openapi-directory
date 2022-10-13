from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccumulateLoyaltyPointsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccumulateLoyaltyPointsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AccumulateLoyaltyPointsRequest:
    path_params: AccumulateLoyaltyPointsPathParams = field(default=None)
    request: shared.AccumulateLoyaltyPointsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccumulateLoyaltyPointsSecurity = field(default=None)
    

@dataclass
class AccumulateLoyaltyPointsResponse:
    accumulate_loyalty_points_response: Optional[shared.AccumulateLoyaltyPointsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
