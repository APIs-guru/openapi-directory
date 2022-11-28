from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonRedZoneStatsInsideTenFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonRedZoneStatsInsideTenPathParams:
    format: PlayerSeasonRedZoneStatsInsideTenFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonRedZoneStatsInsideTenRequest:
    path_params: PlayerSeasonRedZoneStatsInsideTenPathParams = field()
    

@dataclass
class PlayerSeasonRedZoneStatsInsideTenResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_red_zones: Optional[List[Any]] = field(default=None)
    
