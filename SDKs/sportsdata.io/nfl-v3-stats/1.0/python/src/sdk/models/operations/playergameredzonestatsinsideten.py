from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerGameRedZoneStatsInsideTenFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameRedZoneStatsInsideTenPathParams:
    format: PlayerGameRedZoneStatsInsideTenFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameRedZoneStatsInsideTenRequest:
    path_params: PlayerGameRedZoneStatsInsideTenPathParams = field()
    

@dataclass
class PlayerGameRedZoneStatsInsideTenResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_red_zones: Optional[List[Any]] = field(default=None)
    
