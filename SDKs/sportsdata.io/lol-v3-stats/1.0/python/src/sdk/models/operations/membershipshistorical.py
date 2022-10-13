from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsHistoricalPathParams:
    format: MembershipsHistoricalFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsHistoricalRequest:
    path_params: MembershipsHistoricalPathParams = field(default=None)
    

@dataclass
class MembershipsHistoricalResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
