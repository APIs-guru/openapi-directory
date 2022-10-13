from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CurrentSeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasonPathParams:
    format: CurrentSeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasonRequest:
    path_params: CurrentSeasonPathParams = field(default=None)
    

@dataclass
class CurrentSeasonResponse:
    content_type: str = field(default=None)
    season: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
