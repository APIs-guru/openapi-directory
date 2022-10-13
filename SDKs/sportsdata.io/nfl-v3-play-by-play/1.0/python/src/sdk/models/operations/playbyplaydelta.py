from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayByPlayDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlayDeltaPathParams:
    format: PlayByPlayDeltaFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlayDeltaRequest:
    path_params: PlayByPlayDeltaPathParams = field(default=None)
    

@dataclass
class PlayByPlayDeltaResponse:
    content_type: str = field(default=None)
    play_by_plays: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
