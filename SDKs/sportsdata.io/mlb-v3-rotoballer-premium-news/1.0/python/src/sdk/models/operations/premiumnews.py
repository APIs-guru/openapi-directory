from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PremiumNewsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsPathParams:
    format: PremiumNewsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsRequest:
    path_params: PremiumNewsPathParams = field(default=None)
    

@dataclass
class PremiumNewsResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
