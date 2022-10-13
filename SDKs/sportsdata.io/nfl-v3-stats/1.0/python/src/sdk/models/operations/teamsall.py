from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class TeamsAllPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAllRequest:
    path_params: TeamsAllPathParams = field(default=None)
    

@dataclass
class TeamsAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[Any]] = field(default=None)
    
