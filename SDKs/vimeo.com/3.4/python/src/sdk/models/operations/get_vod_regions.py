from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVodRegionsPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodRegionsRequest:
    path_params: GetVodRegionsPathParams = field()
    

@dataclass
class GetVodRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_regions: Optional[List[shared.OnDemandRegion]] = field(default=None)
    
