from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonRedZoneStatsInsideTenFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonRedZoneStatsInsideTenPathParams:
    format: PlayerSeasonRedZoneStatsInsideTenFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonRedZoneStatsInsideTenRequest:
    path_params: PlayerSeasonRedZoneStatsInsideTenPathParams = field(default=None)
    

@dataclass
class PlayerSeasonRedZoneStatsInsideTenResponse:
    content_type: str = field(default=None)
    player_season_red_zones: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
