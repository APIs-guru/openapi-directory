from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WeekCurrentPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekCurrentRequest:
    path_params: WeekCurrentPathParams = field()
    

@dataclass
class WeekCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    week_current_200_application_json_integer: Optional[int] = field(default=None)
    
