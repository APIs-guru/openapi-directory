from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class RaceResultsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RaceResultsPathParams:
    format: RaceResultsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = field(metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RaceResultsRequest:
    path_params: RaceResultsPathParams = field()
    

@dataclass
class RaceResultsResponse:
    content_type: str = field()
    status_code: int = field()
    race_result: Optional[Any] = field(default=None)
    
