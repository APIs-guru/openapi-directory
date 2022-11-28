from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projection: Optional[Any] = field(default=None)
    
