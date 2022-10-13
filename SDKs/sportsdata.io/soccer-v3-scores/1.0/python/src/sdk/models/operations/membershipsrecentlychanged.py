from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsRecentlyChangedFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsRecentlyChangedPathParams:
    days: str = field(default=None, metadata={'path_param': { 'field_name': 'days', 'style': 'simple', 'explode': False }})
    format: MembershipsRecentlyChangedFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsRecentlyChangedRequest:
    path_params: MembershipsRecentlyChangedPathParams = field(default=None)
    

@dataclass
class MembershipsRecentlyChangedResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
