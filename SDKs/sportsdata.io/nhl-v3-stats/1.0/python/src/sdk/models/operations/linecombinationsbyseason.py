from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LineCombinationsBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LineCombinationsBySeasonPathParams:
    format: LineCombinationsBySeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineCombinationsBySeasonRequest:
    path_params: LineCombinationsBySeasonPathParams = field(default=None)
    

@dataclass
class LineCombinationsBySeasonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_lines: Optional[List[Any]] = field(default=None)
    
