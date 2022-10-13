from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class MeterValuesGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MeterValuesGetQueryParams:
    date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class MeterValuesGetRequest:
    path_params: MeterValuesGetPathParams = field(default=None)
    query_params: MeterValuesGetQueryParams = field(default=None)
    

@dataclass
class MeterValuesGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    device_in_past: Optional[shared.DeviceInPast] = field(default=None)
    status_code: int = field(default=None)
    
