from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsHistoricalPathParams:
    format: MembershipsHistoricalFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsHistoricalRequest:
    path_params: MembershipsHistoricalPathParams = field()
    

@dataclass
class MembershipsHistoricalResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
