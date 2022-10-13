from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfVodWasPurchasedPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfVodWasPurchasedSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfVodWasPurchasedRequest:
    path_params: CheckIfVodWasPurchasedPathParams = field(default=None)
    security: CheckIfVodWasPurchasedSecurity = field(default=None)
    

@dataclass
class CheckIfVodWasPurchasedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
