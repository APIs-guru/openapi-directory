from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresByDateDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoresByDateDeltaPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateDeltaFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateDeltaRequest:
    path_params: BoxScoresByDateDeltaPathParams = field(default=None)
    

@dataclass
class BoxScoresByDateDeltaResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
