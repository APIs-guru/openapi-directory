from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class StandingsPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class StandingsRequest:
    path_params: StandingsPathParams = field(default=None)
    

@dataclass
class StandingsResponse:
    content_type: str = field(default=None)
    standings: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
