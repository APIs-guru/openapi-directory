from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonRedZoneStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonRedZoneStatsPathParams:
    format: PlayerSeasonRedZoneStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonRedZoneStatsRequest:
    path_params: PlayerSeasonRedZoneStatsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonRedZoneStatsResponse:
    content_type: str = field(default=None)
    player_season_red_zones: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
