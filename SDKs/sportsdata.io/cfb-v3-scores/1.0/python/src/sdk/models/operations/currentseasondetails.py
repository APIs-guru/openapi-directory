from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class CurrentSeasonDetailsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasonDetailsPathParams:
    format: CurrentSeasonDetailsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasonDetailsRequest:
    path_params: CurrentSeasonDetailsPathParams = field()
    

@dataclass
class CurrentSeasonDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    season: Optional[Any] = field(default=None)
    
