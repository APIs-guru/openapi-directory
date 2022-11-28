from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class BoxScoresByDateDeltaFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class BoxScoresByDateDeltaPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateDeltaFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class BoxScoresByDateDeltaRequest:
    path_params: BoxScoresByDateDeltaPathParams = field()
    

@dataclass
class BoxScoresByDateDeltaResponse:
    content_type: str = field()
    status_code: int = field()
    box_scores: Optional[List[Any]] = field(default=None)
    
