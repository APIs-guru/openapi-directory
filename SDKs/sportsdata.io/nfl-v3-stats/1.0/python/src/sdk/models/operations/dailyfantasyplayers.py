from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class DailyFantasyPlayersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DailyFantasyPlayersPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DailyFantasyPlayersFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DailyFantasyPlayersRequest:
    path_params: DailyFantasyPlayersPathParams = field()
    

@dataclass
class DailyFantasyPlayersResponse:
    content_type: str = field()
    status_code: int = field()
    daily_fantasy_players: Optional[List[Any]] = field(default=None)
    
