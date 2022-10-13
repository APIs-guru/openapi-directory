from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonStatsSplitByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsSplitByTeamPathParams:
    format: PlayerSeasonStatsSplitByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsSplitByTeamRequest:
    path_params: PlayerSeasonStatsSplitByTeamPathParams = field(default=None)
    

@dataclass
class PlayerSeasonStatsSplitByTeamResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
