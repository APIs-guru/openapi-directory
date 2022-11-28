from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SchedulePathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = field()
    

@dataclass
class ScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    schedules: Optional[List[Any]] = field(default=None)
    
