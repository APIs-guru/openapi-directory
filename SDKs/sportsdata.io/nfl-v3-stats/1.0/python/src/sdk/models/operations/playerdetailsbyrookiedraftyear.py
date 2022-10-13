from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PlayerDetailsByRookieDraftYearPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByRookieDraftYearRequest:
    path_params: PlayerDetailsByRookieDraftYearPathParams = field(default=None)
    

@dataclass
class PlayerDetailsByRookieDraftYearResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
