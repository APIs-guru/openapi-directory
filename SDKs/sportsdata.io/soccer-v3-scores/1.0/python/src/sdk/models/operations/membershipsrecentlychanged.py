from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsRecentlyChangedFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsRecentlyChangedPathParams:
    days: str = field(metadata={'path_param': { 'field_name': 'days', 'style': 'simple', 'explode': False }})
    format: MembershipsRecentlyChangedFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsRecentlyChangedRequest:
    path_params: MembershipsRecentlyChangedPathParams = field()
    

@dataclass
class MembershipsRecentlyChangedResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
