from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ScoresByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByDateRequest:
    path_params: ScoresByDatePathParams = field(default=None)
    

@dataclass
class ScoresByDateResponse:
    content_type: str = field(default=None)
    scores: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
