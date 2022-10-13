from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValuesInPastGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesInPastGetQueryParams:
    date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class ValuesInPastGetRequest:
    path_params: ValuesInPastGetPathParams = field(default=None)
    query_params: ValuesInPastGetQueryParams = field(default=None)
    

@dataclass
class ValuesInPastGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    values_data: Optional[shared.ValuesData] = field(default=None)
    
