from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetWordOfTheDayQueryParams:
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordOfTheDayRequest:
    query_params: GetWordOfTheDayQueryParams = field()
    

@dataclass
class GetWordOfTheDayResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
