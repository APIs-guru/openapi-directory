from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
