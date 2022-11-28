from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class PlayByPlayDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayByPlayDeltaPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayByPlayDeltaFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayByPlayDeltaRequest:
    path_params: PlayByPlayDeltaPathParams = field()
    

@dataclass
class PlayByPlayDeltaResponse:
    content_type: str = field()
    status_code: int = field()
    play_by_plays: Optional[List[Any]] = field(default=None)
    
