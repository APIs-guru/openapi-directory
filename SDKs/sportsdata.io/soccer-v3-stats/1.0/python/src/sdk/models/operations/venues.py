from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class VenuesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class VenuesPathParams:
    format: VenuesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VenuesRequest:
    path_params: VenuesPathParams = field(default=None)
    

@dataclass
class VenuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    venues: Optional[List[Any]] = field(default=None)
    
