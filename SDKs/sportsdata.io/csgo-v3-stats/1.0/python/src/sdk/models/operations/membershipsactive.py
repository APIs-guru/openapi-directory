from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsActivePathParams:
    format: MembershipsActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsActiveRequest:
    path_params: MembershipsActivePathParams = field(default=None)
    

@dataclass
class MembershipsActiveResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
