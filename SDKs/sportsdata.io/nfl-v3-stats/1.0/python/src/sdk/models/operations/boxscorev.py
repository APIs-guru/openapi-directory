from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class BoxScoreVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoreVPathParams:
    format: BoxScoreVFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hometeam: str = field(metadata={'path_param': { 'field_name': 'hometeam', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoreVRequest:
    path_params: BoxScoreVPathParams = field()
    

@dataclass
class BoxScoreVResponse:
    content_type: str = field()
    status_code: int = field()
    box_score_v3: Optional[Any] = field(default=None)
    
