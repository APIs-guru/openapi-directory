from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class TimeframesPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class TimeframesRequest:
    path_params: TimeframesPathParams = field()
    

@dataclass
class TimeframesResponse:
    content_type: str = field()
    status_code: int = field()
    timeframes: Optional[List[Any]] = field(default=None)
    
