from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class BoxScoreFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScorePathParams:
    format: BoxScoreFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = field(default=None, metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoreRequest:
    path_params: BoxScorePathParams = field(default=None)
    

@dataclass
class BoxScoreResponse:
    box_score: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
