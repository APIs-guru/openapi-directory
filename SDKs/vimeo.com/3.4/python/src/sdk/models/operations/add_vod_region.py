from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVodRegionPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVodRegionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVodRegionRequest:
    path_params: AddVodRegionPathParams = field(default=None)
    security: AddVodRegionSecurity = field(default=None)
    

@dataclass
class AddVodRegionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_region: Optional[shared.OnDemandRegion] = field(default=None)
    
