from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayByPlaySimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlaySimulationPathParams:
    format: PlayByPlaySimulationFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlaySimulationRequest:
    path_params: PlayByPlaySimulationPathParams = field()
    

@dataclass
class PlayByPlaySimulationResponse:
    content_type: str = field()
    status_code: int = field()
    play_by_plays: Optional[List[Any]] = field(default=None)
    
