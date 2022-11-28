from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayByPlayDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlayDeltaPathParams:
    format: PlayByPlayDeltaFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlayDeltaRequest:
    path_params: PlayByPlayDeltaPathParams = field()
    

@dataclass
class PlayByPlayDeltaResponse:
    content_type: str = field()
    status_code: int = field()
    play_by_plays: Optional[List[Any]] = field(default=None)
    
