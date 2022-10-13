from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayersByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayersByTeamPathParams:
    format: PlayersByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(default=None, metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayersByTeamRequest:
    path_params: PlayersByTeamPathParams = field(default=None)
    

@dataclass
class PlayersByTeamResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
