from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresPathParams:
    format: LegacyBoxScoresFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresRequest:
    path_params: LegacyBoxScoresPathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
