from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AdjustLoyaltyPointsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdjustLoyaltyPointsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdjustLoyaltyPointsRequest:
    path_params: AdjustLoyaltyPointsPathParams = field(default=None)
    request: shared.AdjustLoyaltyPointsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AdjustLoyaltyPointsSecurity = field(default=None)
    

@dataclass
class AdjustLoyaltyPointsResponse:
    adjust_loyalty_points_response: Optional[shared.AdjustLoyaltyPointsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
