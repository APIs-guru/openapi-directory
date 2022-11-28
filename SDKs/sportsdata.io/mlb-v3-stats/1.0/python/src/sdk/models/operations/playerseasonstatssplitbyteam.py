from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonStatsSplitByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsSplitByTeamPathParams:
    format: PlayerSeasonStatsSplitByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsSplitByTeamRequest:
    path_params: PlayerSeasonStatsSplitByTeamPathParams = field()
    

@dataclass
class PlayerSeasonStatsSplitByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
