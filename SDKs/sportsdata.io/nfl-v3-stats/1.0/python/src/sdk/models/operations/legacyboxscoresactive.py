from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresActivePathParams:
    format: LegacyBoxScoresActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresActiveRequest:
    path_params: LegacyBoxScoresActivePathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresActiveResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
