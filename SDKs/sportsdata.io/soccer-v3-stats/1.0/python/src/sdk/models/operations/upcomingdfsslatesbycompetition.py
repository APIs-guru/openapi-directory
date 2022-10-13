from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class UpcomingDfsSlatesByCompetitionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class UpcomingDfsSlatesByCompetitionPathParams:
    competition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'competitionId', 'style': 'simple', 'explode': False }})
    format: UpcomingDfsSlatesByCompetitionFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpcomingDfsSlatesByCompetitionRequest:
    path_params: UpcomingDfsSlatesByCompetitionPathParams = field(default=None)
    

@dataclass
class UpcomingDfsSlatesByCompetitionResponse:
    content_type: str = field(default=None)
    dfs_slates: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
