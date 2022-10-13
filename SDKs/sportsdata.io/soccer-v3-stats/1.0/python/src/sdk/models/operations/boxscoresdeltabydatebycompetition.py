from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresDeltaByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresDeltaByDateByCompetitionPathParams:
    competition: str = field(default=None, metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresDeltaByDateByCompetitionFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresDeltaByDateByCompetitionRequest:
    path_params: BoxScoresDeltaByDateByCompetitionPathParams = field(default=None)
    

@dataclass
class BoxScoresDeltaByDateByCompetitionResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
