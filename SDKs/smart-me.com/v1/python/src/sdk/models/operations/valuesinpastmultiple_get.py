from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ValuesInPastMultipleGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesInPastMultipleGetQueryParams:
    end_date: datetime = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    interval: int = field(metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    start_date: datetime = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ValuesInPastMultipleGetRequest:
    path_params: ValuesInPastMultipleGetPathParams = field()
    query_params: ValuesInPastMultipleGetQueryParams = field()
    

@dataclass
class ValuesInPastMultipleGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    values_data: Optional[List[shared.ValuesData]] = field(default=None)
    
