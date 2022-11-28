from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class CurrentSeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasonPathParams:
    format: CurrentSeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasonRequest:
    path_params: CurrentSeasonPathParams = field()
    

@dataclass
class CurrentSeasonResponse:
    content_type: str = field()
    status_code: int = field()
    season: Optional[Any] = field(default=None)
    
