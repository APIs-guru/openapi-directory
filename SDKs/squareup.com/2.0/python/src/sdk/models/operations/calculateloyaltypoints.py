from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CalculateLoyaltyPointsPathParams:
    program_id: str = field(default=None, metadata={'path_param': { 'field_name': 'program_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalculateLoyaltyPointsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalculateLoyaltyPointsRequest:
    path_params: CalculateLoyaltyPointsPathParams = field(default=None)
    request: shared.CalculateLoyaltyPointsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CalculateLoyaltyPointsSecurity = field(default=None)
    

@dataclass
class CalculateLoyaltyPointsResponse:
    calculate_loyalty_points_response: Optional[shared.CalculateLoyaltyPointsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
