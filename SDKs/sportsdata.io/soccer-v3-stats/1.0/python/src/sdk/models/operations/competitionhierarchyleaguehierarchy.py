from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class CompetitionHierarchyLeagueHierarchyFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionHierarchyLeagueHierarchyPathParams:
    format: CompetitionHierarchyLeagueHierarchyFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionHierarchyLeagueHierarchyRequest:
    path_params: CompetitionHierarchyLeagueHierarchyPathParams = field()
    

@dataclass
class CompetitionHierarchyLeagueHierarchyResponse:
    content_type: str = field()
    status_code: int = field()
    areas: Optional[List[Any]] = field(default=None)
    
