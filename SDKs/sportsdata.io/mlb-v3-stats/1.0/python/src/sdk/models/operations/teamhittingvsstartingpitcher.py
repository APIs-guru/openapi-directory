from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamHittingVsStartingPitcherFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamHittingVsStartingPitcherPathParams:
    format: TeamHittingVsStartingPitcherFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = field(metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamHittingVsStartingPitcherRequest:
    path_params: TeamHittingVsStartingPitcherPathParams = field()
    

@dataclass
class TeamHittingVsStartingPitcherResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
