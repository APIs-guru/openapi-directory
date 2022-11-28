from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class DailyFantasyScoringFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DailyFantasyScoringPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DailyFantasyScoringFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DailyFantasyScoringRequest:
    path_params: DailyFantasyScoringPathParams = field()
    

@dataclass
class DailyFantasyScoringResponse:
    content_type: str = field()
    status_code: int = field()
    daily_fantasy_scorings: Optional[List[Any]] = field(default=None)
    
