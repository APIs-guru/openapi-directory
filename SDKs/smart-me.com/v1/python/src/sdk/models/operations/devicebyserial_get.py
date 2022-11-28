from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeviceBySerialGetQueryParams:
    serial: int = field(metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    

@dataclass
class DeviceBySerialGetRequest:
    query_params: DeviceBySerialGetQueryParams = field()
    

@dataclass
class DeviceBySerialGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    
