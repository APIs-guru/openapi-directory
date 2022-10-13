from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodRequest:
    path_params: GetVodPathParams = field(default=None)
    

@dataclass
class GetVodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
