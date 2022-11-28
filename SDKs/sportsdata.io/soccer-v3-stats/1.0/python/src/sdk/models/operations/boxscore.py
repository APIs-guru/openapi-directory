from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class BoxScoreFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScorePathParams:
    format: BoxScoreFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = field(metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoreRequest:
    path_params: BoxScorePathParams = field()
    

@dataclass
class BoxScoreResponse:
    content_type: str = field()
    status_code: int = field()
    box_score: Optional[Any] = field(default=None)
    
