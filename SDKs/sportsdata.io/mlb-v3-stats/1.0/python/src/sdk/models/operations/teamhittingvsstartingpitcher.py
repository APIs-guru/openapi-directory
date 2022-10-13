from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamHittingVsStartingPitcherFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamHittingVsStartingPitcherPathParams:
    format: TeamHittingVsStartingPitcherFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = field(default=None, metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamHittingVsStartingPitcherRequest:
    path_params: TeamHittingVsStartingPitcherPathParams = field(default=None)
    

@dataclass
class TeamHittingVsStartingPitcherResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
