from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ByeWeeksFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ByeWeeksPathParams:
    format: ByeWeeksFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ByeWeeksRequest:
    path_params: ByeWeeksPathParams = field()
    

@dataclass
class ByeWeeksResponse:
    content_type: str = field()
    status_code: int = field()
    byes: Optional[List[Any]] = field(default=None)
    
