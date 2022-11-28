from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams:
    competition: str = field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
