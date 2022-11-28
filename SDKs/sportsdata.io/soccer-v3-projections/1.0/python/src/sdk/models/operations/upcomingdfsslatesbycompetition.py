from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class UpcomingDfsSlatesByCompetitionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class UpcomingDfsSlatesByCompetitionPathParams:
    competition_id: str = field(metadata={'path_param': { 'field_name': 'competitionId', 'style': 'simple', 'explode': False }})
    format: UpcomingDfsSlatesByCompetitionFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpcomingDfsSlatesByCompetitionRequest:
    path_params: UpcomingDfsSlatesByCompetitionPathParams = field()
    

@dataclass
class UpcomingDfsSlatesByCompetitionResponse:
    content_type: str = field()
    status_code: int = field()
    dfs_slates: Optional[List[Any]] = field(default=None)
    
