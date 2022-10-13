from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamsBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsBySeasonPathParams:
    format: TeamsBySeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsBySeasonRequest:
    path_params: TeamsBySeasonPathParams = field(default=None)
    

@dataclass
class TeamsBySeasonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[Any]] = field(default=None)
    
