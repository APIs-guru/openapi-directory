from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayersByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayersByTeamPathParams:
    format: PlayersByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayersByTeamRequest:
    path_params: PlayersByTeamPathParams = field(default=None)
    

@dataclass
class PlayersByTeamResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
