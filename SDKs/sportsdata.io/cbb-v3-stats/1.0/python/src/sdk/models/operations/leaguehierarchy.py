from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LeagueHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LeagueHierarchyPathParams:
    format: LeagueHierarchyFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueHierarchyRequest:
    path_params: LeagueHierarchyPathParams = field(default=None)
    

@dataclass
class LeagueHierarchyResponse:
    conferences: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
