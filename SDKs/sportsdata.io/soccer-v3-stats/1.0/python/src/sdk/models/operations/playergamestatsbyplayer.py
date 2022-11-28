from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class PlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerGameStatsByPlayerPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayerGameStatsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsByPlayerRequest:
    path_params: PlayerGameStatsByPlayerPathParams = field()
    

@dataclass
class PlayerGameStatsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
