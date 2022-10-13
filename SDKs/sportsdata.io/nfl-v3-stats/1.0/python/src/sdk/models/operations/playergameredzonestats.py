from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerGameRedZoneStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameRedZoneStatsPathParams:
    format: PlayerGameRedZoneStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameRedZoneStatsRequest:
    path_params: PlayerGameRedZoneStatsPathParams = field(default=None)
    

@dataclass
class PlayerGameRedZoneStatsResponse:
    content_type: str = field(default=None)
    player_game_red_zones: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
