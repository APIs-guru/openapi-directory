from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayersByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayersByTeamPathParams:
    format: PlayersByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayersByTeamRequest:
    path_params: PlayersByTeamPathParams = field()
    

@dataclass
class PlayersByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
