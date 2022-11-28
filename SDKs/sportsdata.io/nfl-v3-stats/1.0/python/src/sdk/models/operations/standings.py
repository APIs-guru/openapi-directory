from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class StandingsPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class StandingsRequest:
    path_params: StandingsPathParams = field()
    

@dataclass
class StandingsResponse:
    content_type: str = field()
    status_code: int = field()
    standings: Optional[List[Any]] = field(default=None)
    
