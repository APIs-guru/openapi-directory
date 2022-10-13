from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ScoresBySeasonPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresBySeasonRequest:
    path_params: ScoresBySeasonPathParams = field(default=None)
    

@dataclass
class ScoresBySeasonResponse:
    content_type: str = field(default=None)
    scores: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
