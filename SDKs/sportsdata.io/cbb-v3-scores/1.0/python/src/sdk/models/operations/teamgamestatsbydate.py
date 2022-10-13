from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamGameStatsByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamGameStatsByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: TeamGameStatsByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamGameStatsByDateRequest:
    path_params: TeamGameStatsByDatePathParams = field(default=None)
    

@dataclass
class TeamGameStatsByDateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_games: Optional[List[Any]] = field(default=None)
    
