from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class SeasonLastCompletedFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SeasonLastCompletedPathParams:
    format: SeasonLastCompletedFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonLastCompletedRequest:
    path_params: SeasonLastCompletedPathParams = field()
    

@dataclass
class SeasonLastCompletedResponse:
    content_type: str = field()
    status_code: int = field()
    season_last_completed_200_application_json_integer: Optional[int] = field(default=None)
    
