from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class CompetitionHierarchyLeagueHierarchyFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionHierarchyLeagueHierarchyPathParams:
    format: CompetitionHierarchyLeagueHierarchyFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionHierarchyLeagueHierarchyRequest:
    path_params: CompetitionHierarchyLeagueHierarchyPathParams = field(default=None)
    

@dataclass
class CompetitionHierarchyLeagueHierarchyResponse:
    areas: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
