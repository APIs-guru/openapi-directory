from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class SeasonCurrentFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SeasonCurrentPathParams:
    format: SeasonCurrentFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonCurrentRequest:
    path_params: SeasonCurrentPathParams = field()
    

@dataclass
class SeasonCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    season_current_200_application_json_integer: Optional[int] = field(default=None)
    
