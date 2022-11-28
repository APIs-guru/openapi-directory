from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class PremiumNewsByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PremiumNewsByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByDateRequest:
    path_params: PremiumNewsByDatePathParams = field()
    

@dataclass
class PremiumNewsByDateResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
