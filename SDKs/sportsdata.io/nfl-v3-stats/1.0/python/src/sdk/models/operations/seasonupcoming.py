from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeasonUpcomingPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonUpcomingRequest:
    path_params: SeasonUpcomingPathParams = field(default=None)
    

@dataclass
class SeasonUpcomingResponse:
    content_type: str = field(default=None)
    season_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
