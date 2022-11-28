from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class BoxScoresByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BoxScoresByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateRequest:
    path_params: BoxScoresByDatePathParams = field()
    

@dataclass
class BoxScoresByDateResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
