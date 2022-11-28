from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class SeasonTeamsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SeasonTeamsPathParams:
    format: SeasonTeamsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seasonid: str = field(metadata={'path_param': { 'field_name': 'seasonid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonTeamsRequest:
    path_params: SeasonTeamsPathParams = field()
    

@dataclass
class SeasonTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    season_teams: Optional[List[Any]] = field(default=None)
    
