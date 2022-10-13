from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class PlayByPlayFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlayPathParams:
    format: PlayByPlayFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hometeam: str = field(default=None, metadata={'path_param': { 'field_name': 'hometeam', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlayRequest:
    path_params: PlayByPlayPathParams = field(default=None)
    

@dataclass
class PlayByPlayResponse:
    content_type: str = field(default=None)
    play_by_play: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
