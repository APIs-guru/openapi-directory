from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegionPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegionRequest:
    path_params: GetRegionPathParams = field(default=None)
    

@dataclass
class GetRegionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_region: Optional[shared.OnDemandRegion] = field(default=None)
    
