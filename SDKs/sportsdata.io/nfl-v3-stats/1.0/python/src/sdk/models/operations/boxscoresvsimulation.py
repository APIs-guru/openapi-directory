from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BoxScoresVSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoresVSimulationPathParams:
    format: BoxScoresVSimulationFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(default=None, metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresVSimulationRequest:
    path_params: BoxScoresVSimulationPathParams = field(default=None)
    

@dataclass
class BoxScoresVSimulationResponse:
    box_score_v3s: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
