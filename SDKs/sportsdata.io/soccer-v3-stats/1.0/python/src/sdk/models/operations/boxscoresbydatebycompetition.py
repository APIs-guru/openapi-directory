from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresByDateByCompetitionPathParams:
    competition: str = field(default=None, metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateByCompetitionFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateByCompetitionRequest:
    path_params: BoxScoresByDateByCompetitionPathParams = field(default=None)
    

@dataclass
class BoxScoresByDateByCompetitionResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
