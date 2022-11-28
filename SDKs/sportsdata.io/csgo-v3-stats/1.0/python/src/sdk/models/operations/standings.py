from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class StandingsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class StandingsPathParams:
    format: StandingsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StandingsRequest:
    path_params: StandingsPathParams = field()
    

@dataclass
class StandingsResponse:
    content_type: str = field()
    status_code: int = field()
    standings: Optional[List[Any]] = field(default=None)
    
