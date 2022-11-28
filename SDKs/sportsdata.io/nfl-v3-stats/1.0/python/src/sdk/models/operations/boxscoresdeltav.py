from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class BoxScoresDeltaVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class BoxScoresDeltaVPlayerstoincludeEnum(str, Enum):
    ALL = "all"
    FANTASY = "fantasy"
    IDP = "idp"


@dataclass
class BoxScoresDeltaVPathParams:
    format: BoxScoresDeltaVFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum = field(metadata={'path_param': { 'field_name': 'playerstoinclude', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresDeltaVRequest:
    path_params: BoxScoresDeltaVPathParams = field()
    

@dataclass
class BoxScoresDeltaVResponse:
    content_type: str = field()
    status_code: int = field()
    box_score_v3s: Optional[List[Any]] = field(default=None)
    
