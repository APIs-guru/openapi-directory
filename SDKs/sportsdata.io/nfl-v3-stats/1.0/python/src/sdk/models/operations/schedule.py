from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SchedulePathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = field(default=None)
    

@dataclass
class ScheduleResponse:
    content_type: str = field(default=None)
    schedules: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
