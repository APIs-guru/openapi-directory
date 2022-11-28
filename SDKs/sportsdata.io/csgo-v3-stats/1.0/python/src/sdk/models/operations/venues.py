from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class VenuesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class VenuesPathParams:
    format: VenuesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VenuesRequest:
    path_params: VenuesPathParams = field()
    

@dataclass
class VenuesResponse:
    content_type: str = field()
    status_code: int = field()
    venues: Optional[List[Any]] = field(default=None)
    
