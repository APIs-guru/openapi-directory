from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateRequest:
    path_params: BoxScoresByDatePathParams = field(default=None)
    

@dataclass
class BoxScoresByDateResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
