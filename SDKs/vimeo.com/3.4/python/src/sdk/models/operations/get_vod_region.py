from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodRegionPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodRegionRequest:
    path_params: GetVodRegionPathParams = field()
    

@dataclass
class GetVodRegionResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_region: Optional[shared.OnDemandRegion] = field(default=None)
    
