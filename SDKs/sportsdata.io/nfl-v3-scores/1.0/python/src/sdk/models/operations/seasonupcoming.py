from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class SeasonUpcomingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SeasonUpcomingPathParams:
    format: SeasonUpcomingFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonUpcomingRequest:
    path_params: SeasonUpcomingPathParams = field()
    

@dataclass
class SeasonUpcomingResponse:
    content_type: str = field()
    status_code: int = field()
    season_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    
