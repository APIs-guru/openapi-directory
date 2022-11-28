from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsActivePathParams:
    format: MembershipsActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsActiveRequest:
    path_params: MembershipsActivePathParams = field()
    

@dataclass
class MembershipsActiveResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
