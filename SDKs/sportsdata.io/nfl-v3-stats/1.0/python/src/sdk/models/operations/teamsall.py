from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class TeamsAllPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAllRequest:
    path_params: TeamsAllPathParams = field()
    

@dataclass
class TeamsAllResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[Any]] = field(default=None)
    
