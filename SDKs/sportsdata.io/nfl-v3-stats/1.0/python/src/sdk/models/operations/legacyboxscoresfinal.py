from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LegacyBoxScoresFinalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresFinalPathParams:
    format: LegacyBoxScoresFinalFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresFinalRequest:
    path_params: LegacyBoxScoresFinalPathParams = field()
    

@dataclass
class LegacyBoxScoresFinalResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
