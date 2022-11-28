from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PremiumNewsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByPlayerPathParams:
    format: PremiumNewsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByPlayerRequest:
    path_params: PremiumNewsByPlayerPathParams = field()
    

@dataclass
class PremiumNewsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
