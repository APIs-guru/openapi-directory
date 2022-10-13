from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ValuesInPastMultipleGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValuesInPastMultipleGetQueryParams:
    end_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    interval: int = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    start_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ValuesInPastMultipleGetRequest:
    path_params: ValuesInPastMultipleGetPathParams = field(default=None)
    query_params: ValuesInPastMultipleGetQueryParams = field(default=None)
    

@dataclass
class ValuesInPastMultipleGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    values_data: Optional[List[shared.ValuesData]] = field(default=None)
    
