from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ScoresByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScoresByWeekPathParams:
    format: ScoresByWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByWeekRequest:
    path_params: ScoresByWeekPathParams = field()
    

@dataclass
class ScoresByWeekResponse:
    content_type: str = field()
    status_code: int = field()
    scores: Optional[List[Any]] = field(default=None)
    
