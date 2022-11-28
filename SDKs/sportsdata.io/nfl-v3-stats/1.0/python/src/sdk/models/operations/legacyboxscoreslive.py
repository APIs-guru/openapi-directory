from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LegacyBoxScoresLiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresLivePathParams:
    format: LegacyBoxScoresLiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresLiveRequest:
    path_params: LegacyBoxScoresLivePathParams = field()
    

@dataclass
class LegacyBoxScoresLiveResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
