from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresDeltaPathParams:
    format: LegacyBoxScoresDeltaFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresDeltaRequest:
    path_params: LegacyBoxScoresDeltaPathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresDeltaResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
