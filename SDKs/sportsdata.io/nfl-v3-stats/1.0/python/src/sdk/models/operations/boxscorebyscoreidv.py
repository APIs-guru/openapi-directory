from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class BoxScoreByScoreidVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoreByScoreidVPathParams:
    format: BoxScoreByScoreidVFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    scoreid: str = field(metadata={'path_param': { 'field_name': 'scoreid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoreByScoreidVRequest:
    path_params: BoxScoreByScoreidVPathParams = field()
    

@dataclass
class BoxScoreByScoreidVResponse:
    content_type: str = field()
    status_code: int = field()
    box_score_v3: Optional[Any] = field(default=None)
    
