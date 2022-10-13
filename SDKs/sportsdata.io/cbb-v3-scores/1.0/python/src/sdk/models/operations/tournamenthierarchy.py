from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class TournamentHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TournamentHierarchyPathParams:
    format: TournamentHierarchyFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TournamentHierarchyRequest:
    path_params: TournamentHierarchyPathParams = field(default=None)
    

@dataclass
class TournamentHierarchyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tournament: Optional[Any] = field(default=None)
    
