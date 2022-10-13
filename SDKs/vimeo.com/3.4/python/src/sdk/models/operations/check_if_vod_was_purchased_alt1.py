from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfVodWasPurchasedAlt1PathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfVodWasPurchasedAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfVodWasPurchasedAlt1Request:
    path_params: CheckIfVodWasPurchasedAlt1PathParams = field(default=None)
    security: CheckIfVodWasPurchasedAlt1Security = field(default=None)
    

@dataclass
class CheckIfVodWasPurchasedAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
