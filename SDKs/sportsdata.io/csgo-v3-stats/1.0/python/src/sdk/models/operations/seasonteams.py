from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class SeasonTeamsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SeasonTeamsPathParams:
    format: SeasonTeamsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seasonid: str = field(default=None, metadata={'path_param': { 'field_name': 'seasonid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonTeamsRequest:
    path_params: SeasonTeamsPathParams = field(default=None)
    

@dataclass
class SeasonTeamsResponse:
    content_type: str = field(default=None)
    season_teams: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
