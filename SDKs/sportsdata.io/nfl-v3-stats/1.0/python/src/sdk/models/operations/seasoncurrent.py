from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeasonCurrentPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeasonCurrentRequest:
    path_params: SeasonCurrentPathParams = field()
    

@dataclass
class SeasonCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    season_current_200_application_json_integer: Optional[int] = field(default=None)
    
