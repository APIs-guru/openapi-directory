from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByRookieDraftYearFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByRookieDraftYearPathParams:
    format: PlayerDetailsByRookieDraftYearFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByRookieDraftYearRequest:
    path_params: PlayerDetailsByRookieDraftYearPathParams = field(default=None)
    

@dataclass
class PlayerDetailsByRookieDraftYearResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
