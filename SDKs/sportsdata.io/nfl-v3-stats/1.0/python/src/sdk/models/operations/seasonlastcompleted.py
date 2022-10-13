from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeasonLastCompletedPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonLastCompletedRequest:
    path_params: SeasonLastCompletedPathParams = field(default=None)
    

@dataclass
class SeasonLastCompletedResponse:
    content_type: str = field(default=None)
    season_last_completed_200_application_json_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
