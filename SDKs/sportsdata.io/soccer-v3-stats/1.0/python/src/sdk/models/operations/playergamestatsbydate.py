from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class PlayerGameStatsByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerGameStatsByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayerGameStatsByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsByDateRequest:
    path_params: PlayerGameStatsByDatePathParams = field()
    

@dataclass
class PlayerGameStatsByDateResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
