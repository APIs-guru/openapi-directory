from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class MeterValuesGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MeterValuesGetQueryParams:
    date_: datetime = field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class MeterValuesGetRequest:
    path_params: MeterValuesGetPathParams = field()
    query_params: MeterValuesGetQueryParams = field()
    

@dataclass
class MeterValuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device_in_past: Optional[shared.DeviceInPast] = field(default=None)
    
