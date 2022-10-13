from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CurrentSeasonDetailsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasonDetailsPathParams:
    format: CurrentSeasonDetailsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasonDetailsRequest:
    path_params: CurrentSeasonDetailsPathParams = field(default=None)
    

@dataclass
class CurrentSeasonDetailsResponse:
    content_type: str = field(default=None)
    season: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
