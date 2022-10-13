from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class RaceResultsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RaceResultsPathParams:
    format: RaceResultsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = field(default=None, metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RaceResultsRequest:
    path_params: RaceResultsPathParams = field(default=None)
    

@dataclass
class RaceResultsResponse:
    content_type: str = field(default=None)
    race_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
