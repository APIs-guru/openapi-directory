from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LegacyBoxScoresFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresPathParams:
    format: LegacyBoxScoresFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresRequest:
    path_params: LegacyBoxScoresPathParams = field()
    

@dataclass
class LegacyBoxScoresResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
