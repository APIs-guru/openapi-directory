from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayByPlaySimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlaySimulationPathParams:
    format: PlayByPlaySimulationFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(default=None, metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlaySimulationRequest:
    path_params: PlayByPlaySimulationPathParams = field(default=None)
    

@dataclass
class PlayByPlaySimulationResponse:
    content_type: str = field(default=None)
    play_by_plays: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
