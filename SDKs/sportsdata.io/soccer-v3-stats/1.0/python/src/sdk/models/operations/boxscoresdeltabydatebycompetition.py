from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class BoxScoresDeltaByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresDeltaByDateByCompetitionPathParams:
    competition: str = field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresDeltaByDateByCompetitionFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresDeltaByDateByCompetitionRequest:
    path_params: BoxScoresDeltaByDateByCompetitionPathParams = field()
    

@dataclass
class BoxScoresDeltaByDateByCompetitionResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
