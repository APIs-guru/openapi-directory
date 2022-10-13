from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DailyFantasyScoringFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DailyFantasyScoringPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DailyFantasyScoringFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DailyFantasyScoringRequest:
    path_params: DailyFantasyScoringPathParams = field(default=None)
    

@dataclass
class DailyFantasyScoringResponse:
    content_type: str = field(default=None)
    daily_fantasy_scorings: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
