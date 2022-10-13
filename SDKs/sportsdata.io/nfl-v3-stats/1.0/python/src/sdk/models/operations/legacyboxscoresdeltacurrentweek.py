from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LegacyBoxScoresDeltaCurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LegacyBoxScoresDeltaCurrentWeekPathParams:
    format: LegacyBoxScoresDeltaCurrentWeekFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class LegacyBoxScoresDeltaCurrentWeekRequest:
    path_params: LegacyBoxScoresDeltaCurrentWeekPathParams = field(default=None)
    

@dataclass
class LegacyBoxScoresDeltaCurrentWeekResponse:
    box_scores: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
