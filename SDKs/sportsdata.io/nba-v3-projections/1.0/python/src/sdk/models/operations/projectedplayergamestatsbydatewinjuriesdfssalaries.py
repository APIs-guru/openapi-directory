from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
