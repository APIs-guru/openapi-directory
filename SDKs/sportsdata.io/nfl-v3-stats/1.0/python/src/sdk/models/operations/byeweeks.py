from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ByeWeeksPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ByeWeeksRequest:
    path_params: ByeWeeksPathParams = field(default=None)
    

@dataclass
class ByeWeeksResponse:
    byes: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
