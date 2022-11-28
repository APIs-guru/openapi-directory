from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LineCombinationsBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LineCombinationsBySeasonPathParams:
    format: LineCombinationsBySeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineCombinationsBySeasonRequest:
    path_params: LineCombinationsBySeasonPathParams = field()
    

@dataclass
class LineCombinationsBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    team_lines: Optional[List[Any]] = field(default=None)
    
