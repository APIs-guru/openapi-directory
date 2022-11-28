from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVodRegionPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVodRegionSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVodRegionRequest:
    path_params: AddVodRegionPathParams = field()
    security: AddVodRegionSecurity = field()
    

@dataclass
class AddVodRegionResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_region: Optional[shared.OnDemandRegion] = field(default=None)
    
