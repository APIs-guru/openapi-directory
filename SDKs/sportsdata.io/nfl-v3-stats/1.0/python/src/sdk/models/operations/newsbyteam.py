from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class NewsByTeamPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByTeamRequest:
    path_params: NewsByTeamPathParams = field()
    

@dataclass
class NewsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
