from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresDeltaVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class BoxScoresDeltaVPlayerstoincludeEnum(str, Enum):
    ALL = "all"
    FANTASY = "fantasy"
    IDP = "idp"


@dataclass
class BoxScoresDeltaVPathParams:
    format: BoxScoresDeltaVFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum = field(default=None, metadata={'path_param': { 'field_name': 'playerstoinclude', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresDeltaVRequest:
    path_params: BoxScoresDeltaVPathParams = field(default=None)
    

@dataclass
class BoxScoresDeltaVResponse:
    box_score_v3s: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
