from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValuesInPastGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesInPastGetQueryParams:
    date_: datetime = field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class ValuesInPastGetRequest:
    path_params: ValuesInPastGetPathParams = field()
    query_params: ValuesInPastGetQueryParams = field()
    

@dataclass
class ValuesInPastGetResponse:
    content_type: str = field()
    status_code: int = field()
    values_data: Optional[shared.ValuesData] = field(default=None)
    
