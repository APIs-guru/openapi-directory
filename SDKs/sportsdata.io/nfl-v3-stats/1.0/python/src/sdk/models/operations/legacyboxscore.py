from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoreFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScorePathParams:
    format: LegacyBoxScoreFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hometeam: str = field(metadata={'path_param': { 'field_name': 'hometeam', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoreRequest:
    path_params: LegacyBoxScorePathParams = field()
    

@dataclass
class LegacyBoxScoreResponse:
    content_type: str = field()
    status_code: int = field()
    box_score: Optional[Any] = field(default=None)
    
