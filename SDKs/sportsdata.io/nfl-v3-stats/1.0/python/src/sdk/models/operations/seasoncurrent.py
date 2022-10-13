from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeasonCurrentPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonCurrentRequest:
    path_params: SeasonCurrentPathParams = field(default=None)
    

@dataclass
class SeasonCurrentResponse:
    content_type: str = field(default=None)
    season_current_200_application_json_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
