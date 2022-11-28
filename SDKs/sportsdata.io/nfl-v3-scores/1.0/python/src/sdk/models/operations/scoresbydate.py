from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ScoresByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScoresByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ScoresByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScoresByDateRequest:
    path_params: ScoresByDatePathParams = field()
    

@dataclass
class ScoresByDateResponse:
    content_type: str = field()
    status_code: int = field()
    scores: Optional[List[Any]] = field(default=None)
    
