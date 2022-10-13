from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ScoresByWeekSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScoresByWeekSimulationPathParams:
    format: ScoresByWeekSimulationFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(default=None, metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByWeekSimulationRequest:
    path_params: ScoresByWeekSimulationPathParams = field(default=None)
    

@dataclass
class ScoresByWeekSimulationResponse:
    content_type: str = field(default=None)
    scores: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
