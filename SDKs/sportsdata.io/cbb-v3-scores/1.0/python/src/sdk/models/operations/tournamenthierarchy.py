from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class TournamentHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TournamentHierarchyPathParams:
    format: TournamentHierarchyFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TournamentHierarchyRequest:
    path_params: TournamentHierarchyPathParams = field()
    

@dataclass
class TournamentHierarchyResponse:
    content_type: str = field()
    status_code: int = field()
    tournament: Optional[Any] = field(default=None)
    
