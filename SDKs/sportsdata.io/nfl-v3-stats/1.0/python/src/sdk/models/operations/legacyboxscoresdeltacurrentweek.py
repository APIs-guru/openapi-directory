from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LegacyBoxScoresDeltaCurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresDeltaCurrentWeekPathParams:
    format: LegacyBoxScoresDeltaCurrentWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresDeltaCurrentWeekRequest:
    path_params: LegacyBoxScoresDeltaCurrentWeekPathParams = field()
    

@dataclass
class LegacyBoxScoresDeltaCurrentWeekResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
