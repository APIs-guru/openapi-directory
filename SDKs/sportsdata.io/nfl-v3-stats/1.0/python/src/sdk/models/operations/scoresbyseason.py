from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ScoresBySeasonPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresBySeasonRequest:
    path_params: ScoresBySeasonPathParams = field()
    

@dataclass
class ScoresBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    scores: Optional[List[Any]] = field(default=None)
    
