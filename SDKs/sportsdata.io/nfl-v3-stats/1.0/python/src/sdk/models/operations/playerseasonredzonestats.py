from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonRedZoneStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonRedZoneStatsPathParams:
    format: PlayerSeasonRedZoneStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonRedZoneStatsRequest:
    path_params: PlayerSeasonRedZoneStatsPathParams = field()
    

@dataclass
class PlayerSeasonRedZoneStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_red_zones: Optional[List[Any]] = field(default=None)
    
