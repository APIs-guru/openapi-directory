from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodSeasonPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = field(metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodSeasonRequest:
    path_params: GetVodSeasonPathParams = field()
    

@dataclass
class GetVodSeasonResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_season: Optional[shared.OnDemandSeason] = field(default=None)
    
