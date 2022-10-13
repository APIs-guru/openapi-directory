from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

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
    format: TimeframesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    type: TimeframesTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class TimeframesRequest:
    path_params: TimeframesPathParams = field(default=None)
    

@dataclass
class TimeframesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timeframes: Optional[List[Any]] = field(default=None)
    
