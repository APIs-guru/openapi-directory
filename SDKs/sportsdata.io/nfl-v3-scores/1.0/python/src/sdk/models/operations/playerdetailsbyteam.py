from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByTeamPathParams:
    format: PlayerDetailsByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByTeamRequest:
    path_params: PlayerDetailsByTeamPathParams = field()
    

@dataclass
class PlayerDetailsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    player_details: Optional[List[Any]] = field(default=None)
    
