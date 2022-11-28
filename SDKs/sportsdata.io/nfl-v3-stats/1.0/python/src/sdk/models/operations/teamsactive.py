from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class TeamsActivePathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsActiveRequest:
    path_params: TeamsActivePathParams = field()
    

@dataclass
class TeamsActiveResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[Any]] = field(default=None)
    
