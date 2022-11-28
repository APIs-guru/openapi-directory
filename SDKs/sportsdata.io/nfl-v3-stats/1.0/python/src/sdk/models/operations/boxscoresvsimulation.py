from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class BoxScoresVSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoresVSimulationPathParams:
    format: BoxScoresVSimulationFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresVSimulationRequest:
    path_params: BoxScoresVSimulationPathParams = field()
    

@dataclass
class BoxScoresVSimulationResponse:
    content_type: str = field()
    status_code: int = field()
    box_score_v3s: Optional[List[Any]] = field(default=None)
    
