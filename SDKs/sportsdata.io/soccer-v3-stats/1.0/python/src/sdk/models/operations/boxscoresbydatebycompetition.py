from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class BoxScoresByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresByDateByCompetitionPathParams:
    competition: str = field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateByCompetitionFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateByCompetitionRequest:
    path_params: BoxScoresByDateByCompetitionPathParams = field()
    

@dataclass
class BoxScoresByDateByCompetitionResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
