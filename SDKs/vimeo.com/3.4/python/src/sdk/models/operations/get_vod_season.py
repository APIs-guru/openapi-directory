from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodSeasonPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = field(default=None, metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodSeasonRequest:
    path_params: GetVodSeasonPathParams = field(default=None)
    

@dataclass
class GetVodSeasonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_season: Optional[shared.OnDemandSeason] = field(default=None)
    
