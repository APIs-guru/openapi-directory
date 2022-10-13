from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresLiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresLivePathParams:
    format: LegacyBoxScoresLiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresLiveRequest:
    path_params: LegacyBoxScoresLivePathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresLiveResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
