from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByTeamPathParams:
    format: PlayerDetailsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByTeamRequest:
    path_params: PlayerDetailsByTeamPathParams = field(default=None)
    

@dataclass
class PlayerDetailsByTeamResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
