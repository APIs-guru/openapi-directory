from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class TeamGameStatsByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamGameStatsByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: TeamGameStatsByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamGameStatsByDateRequest:
    path_params: TeamGameStatsByDatePathParams = field()
    

@dataclass
class TeamGameStatsByDateResponse:
    content_type: str = field()
    status_code: int = field()
    team_games: Optional[List[Any]] = field(default=None)
    
