from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ScoresByWeekSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScoresByWeekSimulationPathParams:
    format: ScoresByWeekSimulationFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByWeekSimulationRequest:
    path_params: ScoresByWeekSimulationPathParams = field()
    

@dataclass
class ScoresByWeekSimulationResponse:
    content_type: str = field()
    status_code: int = field()
    scores: Optional[List[Any]] = field(default=None)
    
