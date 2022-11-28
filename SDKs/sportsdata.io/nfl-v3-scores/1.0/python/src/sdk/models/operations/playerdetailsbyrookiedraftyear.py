from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByRookieDraftYearFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByRookieDraftYearPathParams:
    format: PlayerDetailsByRookieDraftYearFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByRookieDraftYearRequest:
    path_params: PlayerDetailsByRookieDraftYearPathParams = field()
    

@dataclass
class PlayerDetailsByRookieDraftYearResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
