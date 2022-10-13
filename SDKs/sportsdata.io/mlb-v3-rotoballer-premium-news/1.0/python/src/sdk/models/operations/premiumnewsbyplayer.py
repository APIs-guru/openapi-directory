from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PremiumNewsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByPlayerPathParams:
    format: PremiumNewsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByPlayerRequest:
    path_params: PremiumNewsByPlayerPathParams = field(default=None)
    

@dataclass
class PremiumNewsByPlayerResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
