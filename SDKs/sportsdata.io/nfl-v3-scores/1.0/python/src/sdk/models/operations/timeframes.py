from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TimeframesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class TimeframesTypeEnum(str, Enum):
    CURRENT = "current"
    UPCOMING = "upcoming"
    COMPLETED = "completed"
    RECENT = "recent"
    ALL = "all"


@dataclass
class TimeframesPathParams:
    format: TimeframesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    type: TimeframesTypeEnum = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class TimeframesRequest:
    path_params: TimeframesPathParams = field()
    

@dataclass
class TimeframesResponse:
    content_type: str = field()
    status_code: int = field()
    timeframes: Optional[List[Any]] = field(default=None)
    
