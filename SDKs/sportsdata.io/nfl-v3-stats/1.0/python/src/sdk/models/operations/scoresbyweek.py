from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ScoresByWeekPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByWeekRequest:
    path_params: ScoresByWeekPathParams = field(default=None)
    

@dataclass
class ScoresByWeekResponse:
    content_type: str = field(default=None)
    scores: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
