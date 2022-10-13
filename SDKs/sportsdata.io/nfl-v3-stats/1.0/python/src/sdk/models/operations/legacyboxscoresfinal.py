from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresFinalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresFinalPathParams:
    format: LegacyBoxScoresFinalFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresFinalRequest:
    path_params: LegacyBoxScoresFinalPathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresFinalResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
