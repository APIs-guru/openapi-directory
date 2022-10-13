from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class BoxScoreByScoreidVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoreByScoreidVPathParams:
    format: BoxScoreByScoreidVFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    scoreid: str = field(default=None, metadata={'path_param': { 'field_name': 'scoreid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoreByScoreidVRequest:
    path_params: BoxScoreByScoreidVPathParams = field(default=None)
    

@dataclass
class BoxScoreByScoreidVResponse:
    box_score_v3: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
