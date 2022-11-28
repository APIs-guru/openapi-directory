from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LegacyBoxScoresActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresActivePathParams:
    format: LegacyBoxScoresActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresActiveRequest:
    path_params: LegacyBoxScoresActivePathParams = field()
    

@dataclass
class LegacyBoxScoresActiveResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
