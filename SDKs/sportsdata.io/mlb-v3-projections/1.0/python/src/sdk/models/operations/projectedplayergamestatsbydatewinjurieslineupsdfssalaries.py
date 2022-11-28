from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
