from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PremiumNewsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsPathParams:
    format: PremiumNewsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsRequest:
    path_params: PremiumNewsPathParams = field()
    

@dataclass
class PremiumNewsResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
