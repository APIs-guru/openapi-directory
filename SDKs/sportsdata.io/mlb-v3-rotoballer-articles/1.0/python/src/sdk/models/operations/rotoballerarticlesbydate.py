from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class RotoballerArticlesByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesByDatePathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: RotoballerArticlesByDateFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesByDateRequest:
    path_params: RotoballerArticlesByDatePathParams = field()
    

@dataclass
class RotoballerArticlesByDateResponse:
    content_type: str = field()
    status_code: int = field()
    articles: Optional[List[Any]] = field(default=None)
    
