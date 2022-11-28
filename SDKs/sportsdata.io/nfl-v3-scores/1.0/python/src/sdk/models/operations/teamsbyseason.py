from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamsBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsBySeasonPathParams:
    format: TeamsBySeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsBySeasonRequest:
    path_params: TeamsBySeasonPathParams = field()
    

@dataclass
class TeamsBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[Any]] = field(default=None)
    
