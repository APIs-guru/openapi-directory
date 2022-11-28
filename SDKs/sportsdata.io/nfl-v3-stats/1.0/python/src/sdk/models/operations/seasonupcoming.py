from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeasonUpcomingPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonUpcomingRequest:
    path_params: SeasonUpcomingPathParams = field()
    

@dataclass
class SeasonUpcomingResponse:
    content_type: str = field()
    status_code: int = field()
    season_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    
