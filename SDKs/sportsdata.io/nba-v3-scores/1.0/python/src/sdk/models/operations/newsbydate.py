from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class NewsByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class NewsByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: NewsByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByDateRequest:
    path_params: NewsByDatePathParams = field()
    

@dataclass
class NewsByDateResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
