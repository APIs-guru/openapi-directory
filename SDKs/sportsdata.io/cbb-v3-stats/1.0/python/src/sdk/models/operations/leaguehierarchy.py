from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LeagueHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LeagueHierarchyPathParams:
    format: LeagueHierarchyFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueHierarchyRequest:
    path_params: LeagueHierarchyPathParams = field()
    

@dataclass
class LeagueHierarchyResponse:
    content_type: str = field()
    status_code: int = field()
    conferences: Optional[List[Any]] = field(default=None)
    
