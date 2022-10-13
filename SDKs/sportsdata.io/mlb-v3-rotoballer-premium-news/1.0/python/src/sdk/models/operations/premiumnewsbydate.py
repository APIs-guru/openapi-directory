from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PremiumNewsByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PremiumNewsByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByDateRequest:
    path_params: PremiumNewsByDatePathParams = field(default=None)
    

@dataclass
class PremiumNewsByDateResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
