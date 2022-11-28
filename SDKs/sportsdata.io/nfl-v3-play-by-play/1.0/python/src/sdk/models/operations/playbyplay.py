from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class PlayByPlayFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlayPathParams:
    format: PlayByPlayFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hometeam: str = field(metadata={'path_param': { 'field_name': 'hometeam', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlayRequest:
    path_params: PlayByPlayPathParams = field()
    

@dataclass
class PlayByPlayResponse:
    content_type: str = field()
    status_code: int = field()
    play_by_play: Optional[Any] = field(default=None)
    
