from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class NewsByTeamPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByTeamRequest:
    path_params: NewsByTeamPathParams = field(default=None)
    

@dataclass
class NewsByTeamResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
